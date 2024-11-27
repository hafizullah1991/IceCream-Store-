import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedService } from '../../services/shared.services';
import { Observable, concatMap, exhaustMap, first, from, last, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public sharedService = inject(SharedService)
  public userData: any
  public foods = ['banana', 'orange', 'pizza', 'eggs']

  private fetchUserData(error: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject('There was an error fetching the data...')
        } else {
          let data = {
            name: 'Roger',
            email: 'rogelio.g.sandoval@gmail.com',
            phone: '2105406838',
            skills: [
              'Angular',
              'HTML',
              'CSS',
              'JavaScript',
              'TypeScript',
              'RxJS'
            ]
          }
          resolve(data)
        }
      }, 5000)
    })
  }

  private buildDashboard(error: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject('Could not build the dashboard...')
        } else {
          resolve('Dashboard is built')
        }
      }, 2000)
    })
  }

  public async login(): Promise<void> {
    console.log('Loading...')
    try {
      await this.fetchUserData(false)

      await this.buildDashboard(false)

      console.log('SUCCESS!')
    } catch(error) {
      console.log(error)
    }
  }

  // public login(): void {
  //   console.log('loading')
  //   this.fetchUserData(false).then(async () => {
  //     await this.buildDashboard(false)

  //     console.log('SUCCESS ALL COMPLETE')
  //   }).catch(error => {
  //     throw error
  //   })
  // }

  private fetchFoodDetails(food: string) {
    let randomNumber = Math.floor(Math.random() * 10) + 1
    return new Observable(observer => {
      setTimeout(() => {
        let foodInfo = {
          name: food,
          description: 'some description from the database',
          price: 2.33
        };
  
        observer.next(foodInfo); // Emit the food info
        observer.complete(); // Complete the observable
      }, 100 * randomNumber);
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      from(this.foods)
      .pipe(
        last(),
        map((value: string) => value.charAt(0).toUpperCase() + value.slice(1) + ' ARE AMAZING')
      )
      .subscribe({
        next: response => {
          console.log(response)
        }
      })


      // from(this.fetchUserData(false))
      // .subscribe({
      //   next: response => {
      //     console.log(response)
      //   },
      //   error: err => {
      //     console.log(err)
      //   },
      //   complete: () => {
      //     console.log('SUCCESS')
      //   }
      // })
    }, 1000)
  }
}
