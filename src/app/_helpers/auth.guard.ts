import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../_services/token.service';


//syteme de controle d'accès avec Token
export const authGuard: CanActivateFn = (route, state) => {

  // Injecter le TokenService et Router
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // Vérifier la présence du token dans le localStorage via le TokenService
  // Fonction dans le TokenService pour récupérer le token


   // Si le token est valide (selon ta logique de validation), on autorise l'accès
   if (tokenService.isLogged()) {
    // Si le token est valide, l'utilisateur peut accéder à la route
    return true;
    } else {
        // Si le token est absent ou invalide, rediriger vers la page de connexion
        router.navigate(['auth']);  // Redirection vers la page de login
        return false;
    }

};
