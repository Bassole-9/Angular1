import { Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';
import { authGuard } from './_helpers/auth.guard';

export const routes: Routes = [
  ///qui va charger tous les enfant public
  {
    path: '',
    loadChildren: () => import('./bassole/bassole.module')
    .then(m => m.BassoleModule)
  },

  //admin qui va charger tous les enfant admin et activation du gardien Authguard
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule),canActivate:[authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },



  //route d'erreur
  {
    path: '**', component: ErrorComponent
  }
];
