import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { AuthComponent } from './auth';
import { DashboardComponent } from './dashboard';
import { NoContentComponent } from './no-content';
import { AuthInGuard }        from './shared/auth.guard';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent, canActivate: [AuthInGuard]},
  { path: 'about', component: AboutComponent, canActivate: [AuthInGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthInGuard]},
  { path: 'auth', component: AuthComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
