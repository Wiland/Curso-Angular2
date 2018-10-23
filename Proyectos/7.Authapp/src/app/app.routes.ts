import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ AuthGuardService ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
