import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('')
  })

  ngOnInit(): void {
      
  }

  public submitForm(): void {
    console.log(this.contactForm.value)
    this.contactForm.reset()
  }











  // Template Form

  // public name = ''
  // public email = ''
  // public phone = ''
  // public message = ''

  // public submitForm(): void {
  //   let formValues = [
  //     this.name,
  //     this.email,
  //     this.phone,
  //     this.message
  //   ]

  //   console.log(formValues)
  // }
}
