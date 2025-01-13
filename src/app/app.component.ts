import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { LandingComponent } from './pages/home/landing/landing.component/landing.component.component';
import { SigninComponent } from './pages/home/signin/signin.component';
import { AnalyticsComponentComponent } from './pages/dashboard/analytics/analytics/analytics.component';
import { AssetComponentComponent } from './pages/dashboard/assets/asset.component/asset.component.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Landing Page
  { path: 'signin', component: SigninComponent }, // Sign-In Page
   {path: 'dashboard',  children: [
          {path: 'analytics',component: AnalyticsComponentComponent},
          {path: 'assets', component: AssetComponentComponent}
      ]} 
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
