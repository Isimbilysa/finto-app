import { Routes } from '@angular/router';
import { SigninComponent } from './pages/home/signin/signin.component';
import { LandingComponent } from './pages/home/landing/landing.component/landing.component.component';
import { SignupComponent } from './pages/home/signup/signup.component/signup.component.component';
import { SideNavComponent } from './common/navigation/side-nav/side-nav.component';
import { AnalyticsComponentComponent } from './pages/dashboard/analytics/analytics/analytics.component';
import { AssetComponentComponent } from './pages/dashboard/assets/asset.component/asset.component.component';
import { PortfolioComponentComponent } from './pages/dashboard/portfolio/portfolio.component/portfolio.component.component';

export const routes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', component: LandingComponent},
    {path: 'dashboard',  children: [
        {path: 'analytics',component: AnalyticsComponentComponent},
        {path: 'assets', component: AssetComponentComponent},
        {path:'portofolio', component: PortfolioComponentComponent},
    ]}];