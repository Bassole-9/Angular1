import { Component } from '@angular/core';
import { PheaderComponent } from '../pheader/pheader.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-playout',
  //importation de PheaderComponent et Routermodule et j'affiche dans son html a l'aide du selector et outlet
  imports: [PheaderComponent, RouterModule ],
  templateUrl: './playout.component.html',
  styleUrl: './playout.component.css',
})
export class PlayoutComponent {}
