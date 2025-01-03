import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
//stokage et redirection sur acceuil
  constructor(private router : Router) { }
  saveToken(token:string):void{
    localStorage.setItem('token',token);
    this.router.navigate(['admin'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem("token")
    return !! token
  }

  clearToken():void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}
