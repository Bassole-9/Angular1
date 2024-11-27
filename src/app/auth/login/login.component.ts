import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../_services/auth.service';
import { ICredentials } from '../../_interface/credentials';
import { TokenService } from '../../_services/token.service';





//importation de CommonModule et ReactiveFormsModule pour gere notre formulaire de façon reactif
//importztion de provideHttpClient,HttpClient pour appel ApI et creation du provider pour introduire mon provideHttpClient
@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;  // Message d'erreur
  successMessage: string | null = null;  // Message de succès


  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private tokenService : TokenService

  ) {
    // Initialiser le formulaire avec des validateurs
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['',[Validators.required]]
    });
  }

  onSubmit() {

    // Obtenir les valeurs du formulaire et les typer
    const credentials: ICredentials = this.loginForm.value;

     // Appeler le service de connexion avec les informations de l'utilisateur
    this.authService.login(credentials).subscribe(
      data =>{
        console.log(data.token)
        this.tokenService.saveToken(data.token)
      },
      (err)=>console.log(err))
  }
}
