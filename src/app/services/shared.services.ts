import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

// Angular decorator that tells Angular this is an Injectable
@Injectable({
  // This means 'allow this service to be used throughout entire application'
  providedIn: 'root'
})

export class SharedService {
  public userData = {
    'name': 'Roger',
    'email': 'rogelio.g.sandoval@gmail.com',
    'permissions': 'employee'
  }
  router = inject(Router)

  getRoute() {
    return this.router.url
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route)
  }
}