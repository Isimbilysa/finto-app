import { Routes } from '@angular/router';
import { SigninComponent } from './pages/home/signin/signin.component';
import { LandingComponent } from './pages/home/landing/landing.component/landing.component.component';
import { SignupComponent } from './pages/home/signup/signup.component/signup.component.component';
import { AnalyticsComponentComponent } from './pages/dashboard/analytics/analytics/analytics.component';
import { CreateAssetComponent } from './pages/dashboard/assets/create-asset/create-asset.component';
import { ListAssetsComponent } from './pages/dashboard/assets/list-assets/list-assets.component';
import { PortfolioComponentComponent } from './pages/dashboard/portfolio/portfolio.component/portfolio.component.component';
import { AssetComponentComponent } from './pages/dashboard/assets/asset.component/asset.component.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: LandingComponent },
  {
    path: 'dashboard',
    children: [
      { path: 'analytics', component: AnalyticsComponentComponent },
      { path: 'portfolio', component: PortfolioComponentComponent },
      { path: 'assets', component: ListAssetsComponent },
    ],
  },
];
