import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AheaderComponent } from '../aheader/aheader.component';
import { SidemenuComponent } from "../sidemenu/sidemenu.component";
@Component({
  selector: 'app-alayout',
  imports: [RouterModule, AheaderComponent, SidemenuComponent],
  templateUrl: './alayout.component.html',
  styleUrl: './alayout.component.css',
})
export class AlayoutComponent {}
