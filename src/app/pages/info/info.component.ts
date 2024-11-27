import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  myObservable = new Observable((subscriber) => {
    subscriber.next({
      name: 'Roger',
      email: 'rogelio.g.sandoval@gmail.com',
      phone: '2105406838',
      permissions: 'admin'
    })
    subscriber.next({
      name: 'Anthony Smith',
      email: 'smithers10@gmail.com',
      phone: '2104335439',
      permissions: 'moderator'
    })
    subscriber.next({
      name: 'Simon Hitson',
      email: 'simonisgay@gmail.com',
      phone: '2108993443',
      permissions: 'admin'
    })
    subscriber.next({
      name: 'Orion Calderon',
      email: 'allrowdy69@gmail.com',
      phone: '2104439684',
      permissions: 'moderator'
    })
    subscriber.complete()
  })

  ngOnInit(): void {
    setTimeout(() => {
      this.myObservable.subscribe({
        next: response => {
          console.log(response)
        },
        error: err => {
          throw err
        },
        complete: () => {
          console.log('My subscription has completed!')
        }
      })
    }, 2000)
  }
}
