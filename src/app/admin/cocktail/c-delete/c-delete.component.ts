import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-delete',
  imports: [],
  templateUrl: './c-delete.component.html',
  styleUrl: './c-delete.component.css'
})
export class CDeleteComponent implements OnInit {
  constructor(private activated : ActivatedRoute) { }
  ngOnInit(): void {
   this.activated.params.subscribe(
    (data)=>{
      console.log(data);
    }
   )
  }
}
