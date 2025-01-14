import { Routes } from '@angular/router';
import { SigninComponent } from './pages/home/signin/signin.component';
import { LandingComponent } from './pages/home/landing/landing.component/landing.component.component';
import { SignupComponent } from './pages/home/signup/signup.component/signup.component.component';
import { AnalyticsComponentComponent } from './pages/dashboard/analytics/analytics/analytics.component';
import { CreateAssetComponent } from './pages/dashboard/assets/create-asset/create-asset.component';
import { ListAssetsComponent } from './pages/dashboard/assets/list-assets/list-assets.component';

export const routes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', component: LandingComponent},
    {path: 'dashboard',  children: [
        {path: 'analytics',component: AnalyticsComponentComponent},
        {path: 'assets', children : [{path : 'create-asset', component: CreateAssetComponent}]},
        {path: 'assets', children : [{path : 'list', component: ListAssetsComponent}]}

    ]}];