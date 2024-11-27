import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //nouvelle declarartion de composant standelone qui est composant autonome
  standalone:true,
  //importation des composants necessaires de mon site pour faire la navigation entre mes liens,permet de faire fonctionner mon html
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toliba';
}
