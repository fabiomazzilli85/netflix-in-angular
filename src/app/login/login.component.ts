import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.models';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false; // Variabile per gestire lo stato di login

  // Inietta Router nel costruttore
  constructor(private router: Router) {}

  // Verifica se l'utente è già loggato
  ngOnInit() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user: User = JSON.parse(savedUser);
      this.isLoggedIn = true; // Imposta lo stato di login se l'utente è trovato nel localStorage
    }
  }

  onSubmit() {
    // Recupera i dati dell'utente dal localStorage
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      const user: User = JSON.parse(savedUser);

      // Confronta username e password
      if (this.username === user.email && this.password === user.password) {
        console.log('Login effettuato con successo!');
        this.router.navigate(['/']);
      } else {
        console.log('Credenziali errate!');
      }
    } else {
      console.log('Nessun utente trovato nel localStorage');
    }
  }
}
