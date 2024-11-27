import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

///5 importation des routes parents admin-routing et exportation vers route final app.routes.ts

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
