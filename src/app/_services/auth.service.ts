import { Injectable,inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from '../_interface/credentials';
import { IToken } from '../_interface/token';
import { Observable } from 'rxjs';
////injecter HttpClients pour la consommation

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Baseurl = "http://localhost:3000/api/users/login"
  private http = inject(HttpClient);

  // Méthode pour se connecter (login)
  login(credentials:ICredentials): Observable<IToken>{
    return this.http.post<IToken>(this.Baseurl,credentials)
  }

}
