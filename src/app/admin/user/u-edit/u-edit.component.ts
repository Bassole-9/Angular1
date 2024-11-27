import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  imports: [],
  templateUrl: './u-edit.component.html',
  styleUrl: './u-edit.component.css',
})
export class UEditComponent implements OnInit {
  constructor(private activated: ActivatedRoute) {}
  ngOnInit(): void {
    //recuperation du parametre dans Url
    this.activated.params.subscribe((data) => {
      console.log(data);
    });
  }
}
