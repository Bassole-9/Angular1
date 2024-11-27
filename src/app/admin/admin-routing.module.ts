import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DasboardComponent } from './dasboard/dasboard.component';

///3importation de layoute pour faire la nivagation a travers toute  mes pages coté admin admin
////4 recupere les routes enfants de  user,cocktail et creation des routes parents  du dossier adminx

const routes: Routes = [
  {
    path: '', component:AlayoutComponent,children :[
      {
        path:'',
        redirectTo:"dashboard",
        pathMatch:"full"
      },
      {
        path:"dashboard",
        component:DasboardComponent
      },
      ////admin/user pour aller sur ce modules user et aussi le modiule cocktail
      {
        path:"user",
        loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
      },
      {
        path:'cocktail',
        loadChildren:()=>import('./cocktail/cocktail.module').then(m=>m.CocktailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
