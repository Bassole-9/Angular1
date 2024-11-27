import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BassoleRoutingModule } from './bassole-routing.module';
import { PheaderComponent } from './pheader/pheader.component';
import { RouterModule } from '@angular/router';

//importation de bassole-routing et exportation vers route final app.routes.ts

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BassoleRoutingModule,
  ]
})
export class BassoleModule { }
