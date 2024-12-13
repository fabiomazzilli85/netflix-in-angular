import { Component } from '@angular/core';
import { User } from '../models/user.models';
import { FormsModule } from '@angular/forms';  
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

    // Inietta il Router nel costruttore
    constructor(private router: Router) {}

  onSubmit() {
    // Verifica se l'utente è già registrato
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      alert('Sei già registrato.');
      // Puoi anche impostare un messaggio di errore o redirigere l'utente
      return; // Interrompe la registrazione
    }

    // Salva i dati dell'utente nel localStorage
    localStorage.setItem('user', JSON.stringify(this.user));
    console.log('Registrazione completata!');

    this.router.navigate(['/login']);
  }
}