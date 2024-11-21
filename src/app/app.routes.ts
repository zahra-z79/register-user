import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
];
