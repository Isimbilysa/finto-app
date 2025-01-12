import { Routes } from '@angular/router';
import { SigninComponent } from './pages/home/signin/signin.component';
import { LandingComponent } from './pages/home/landing/landing.component/landing.component.component';
import { SignupComponent } from './pages/home/signup/signup.component/signup.component.component';

export const routes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', component: LandingComponent},
];
