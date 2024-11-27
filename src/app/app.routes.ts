import { Routes, Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path:'info',
    component: InfoComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
