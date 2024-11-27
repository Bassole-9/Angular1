import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

///2 il recupere les routes enfants de users et les envois dans le routing parents admin

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
