import { Routes } from '@angular/router';
import { SigninComponent } from './pages/home/signin/signin.component';
import { LandingComponent } from './pages/home/landing/landing.component/landing.component.component';
import { SignupComponent } from './pages/home/signup/signup.component/signup.component.component';
import { AnalyticsComponentComponent } from './pages/dashboard/analytics/analytics/analytics.component';
import { ListAssetsComponent } from './pages/dashboard/assets/list-assets/list-assets.component';
import { PortfolioComponentComponent } from './pages/dashboard/portfolio/portfolio.component/portfolio.component.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent, title: 'SignIn' },
  { path: 'signup', component: SignupComponent, title: 'SignUp' },
  { path: '', component: LandingComponent, title: 'Welcome' },
  {
    path: 'dashboard',
    children: [
      { path: 'analytics', component: AnalyticsComponentComponent , title: 'Analytics'},
      { path: 'portfolio', component: PortfolioComponentComponent, title: 'Portfolio' },
      { path: 'assets?portfolio=portfolioID', component: ListAssetsComponent, title: 'Assets' },
      { path: 'assets', component: ListAssetsComponent,  title: 'Assets' },
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];
