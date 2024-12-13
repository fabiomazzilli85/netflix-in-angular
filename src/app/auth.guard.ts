import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Recupera i dati dell'utente dal localStorage
    const user = localStorage.getItem('user');

    // Se l'utente è loggato, non ha accesso al Login e al Register
    if (user) {
      // Redirect alla pagina principale
      this.router.navigate(['/home']);
      return false;
    }
    // Se non è loggato, può accedere
    return true;
  }
}
