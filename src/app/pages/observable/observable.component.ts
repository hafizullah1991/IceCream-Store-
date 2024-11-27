import { Component, OnInit, signal } from '@angular/core'
import { Observable, first, last } from 'rxjs'

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {
  // public number: number = 0
  // this.number = 4

  // public number = signal<number>(0)
  // this.number.set(4)

  public promiseSignal = signal<any>(undefined)
  public observableSignal = signal<any>(undefined)

  ngOnInit(): void {
    // console.log('Promise: ', this.promiseSignal())
    // console.log('Observable: ', this.observableSignal())
  }

  // Promise are EAGER. They want to run right away no matter what.
  // You cannot use rxjs with promises
  // .then((response) =>) to do something with the data receieved
  // Returns a SINGLE value
  // Will usually come in as some function/api
  // isPromise = new Promise((resolve, reject) => {
  //   let error = false

  //   if (error) {
  //     reject('DATA FROM PROMISE WAS REJECTED')
  //   } else {
  //     let userData = {
  //       name: 'Hafiz',
  //       email: 'hafiz10@gmail.com',
  //       phone: '123456789'
  //     }
  //     resolve(userData)
  //   }
  // }).then((response) => {
  //   try {
  //     this.promiseSignal.set(response)
  //   } catch(error) {
  //     throw error
  //   }
  // })

  // Observables are LAZY. They need a subscriber.
  // You can use rxjs (Reactive Extensions For JavaScript)
  // .subscribe({ next: response })
  // Can return multiple values
  // Will usually come in some API
  isObservable = new Observable((subscriber) => {
    let error = false

    if (error) {
      subscriber.error('DATA FROM OBSERVABLE WAS REJECTED')
    } else {
      let userData = {
        name: 'Hafiz',
        email: 'hafiz10@gmail.com',
        phone: '123456789'
      }

      let priceData = [
        '222',
        '333',
        '444'
      ]

      subscriber.next(userData) //inner-observable
      subscriber.next('THIS IS A MESSAGE') //inner-observable
      subscriber.next(priceData)//inner-observable
      subscriber.complete()
    }
  })
}