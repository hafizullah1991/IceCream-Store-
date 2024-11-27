import { Component, OnInit, inject, signal } from '@angular/core';
// HTTPClient allows us to work with Observables (AKA data from an API)
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../../interfaces/menu.interfaces';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DevkitFileSystem } from '@angular/cdk/schematics';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  private http = inject(HttpClient)
  private api = 'https://672ec227229a881691f0d9bf.mockapi.io/scoop/ice-creams'
  public showEditForm = signal<boolean>(false)
  // public iceCreams = signal<MenuItem[]>([])
  public iceCreams = signal<MenuItem[]>([{
    id: '',
    name: '',
    price: 0,
    calories: 0,
    category: '',
    description: ''
  }])
  public showData = signal<boolean>(false)
  public showError = signal<boolean>(false)
  
  public iceCreamForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    calories: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl('')
  })

  // public iceCreamFormEdit = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   calories: new FormControl(''),
  //   category: new FormControl(''),
  //   description: new FormControl('')
  // })

  ngOnInit(): void {
    setTimeout(() => {
      this.http.get<MenuItem[]>(this.api).subscribe({
        next: response => {
          console.log(response)
          this.iceCreams.set(response)
          this.showData.set(true)
        },
        error: err => {
          this.showError.set(true)
        },
        complete: () => {
          // console.log('The subscription has completed!')
        }
      })
    }, 3000)
  }

  public addItem(): void {
    this.http.post<MenuItem>(this.api, this.iceCreamForm.value).subscribe({
      next: response => {
        
      },
      error: err => {

      },
      complete: () => {
        window.location.reload()
      }
    })
  }

  public deleteItem(id: any): void {
    // `/${id}` this is called template literal, it's for making strings in JavaScript '$' is called intorpolation
    this.http.delete(this.api + `/${id}`).subscribe({
      next: response => {

      },
      error: err => {

      },
      complete: () => {
        window.location.reload()
      }
    })
  }

  // public updateItem(id: any): void {
  //   this.http.patch<MenuItem>(this.api + `/${id}`, this.iceCreamFormEdit.value).subscribe({
  //     next: response => {
  //       console.log(response)
  //     },
  //     error: err => {

  //     },
  //     complete: () => {

  //     }
  //   })
  // }
}
