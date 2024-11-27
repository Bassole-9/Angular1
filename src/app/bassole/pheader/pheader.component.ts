import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pheader',
  //il permet de l'utiliser dans mes liens dans  mon html
  imports: [RouterLink],
  templateUrl: './pheader.component.html',
  styleUrl: './pheader.component.css'
})
export class PheaderComponent {

}
