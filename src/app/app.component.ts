import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { LandingComponent } from './pages/home/landing/landing.component/landing.component.component';
import { SigninComponent } from './pages/home/signin/signin.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Landing Page
  { path: 'signin', component: SigninComponent }, // Sign-In Page
];


@Component({  
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finto';
}
