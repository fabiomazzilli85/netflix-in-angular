import { Component, Input, Output, EventEmitter, inject, Inject } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  [x: string]: any;
  @Input() movie!: Movie;
  @Output() addMovie = new EventEmitter<Movie>();
  @Input() isInList: boolean = false;
  @Output() buttonClick = new EventEmitter<Movie>();
  @Output() showDetails = new EventEmitter<Movie>();

  private dialog = inject(MatDialog); // Iniettare il servizio MatDialog

  addToList() {
    this.addMovie.emit(this.movie);
    this.openSnackBar(); 
  }

  openDialog(): void {
    this.dialog.open(DialogOverviewComponent, {
      data: { overview: this.movie.overview }, // Passa la trama come dati al dialog
    });
  }

  openSnackBar(): void {
    this.snackBar.open('Hai aggiunto il film ai preferiti', 'Chiudi', {
      duration: 3000, 
    });
  }

  constructor(private snackBar: MatSnackBar) {}
  
}

// Questo è il modale
@Component({
  selector: 'dialog-overview',
  template: `
    <div class="p-9">
      <h1 mat-dialog-title>Trama</h1>
      <div mat-dialog-content>
        <p>{{ data.overview }}</p>
      </div>
      <div mat-dialog-actions align="end">
        <button mat-button mat-dialog-close>Chiudi</button>
      </div>
    </div>
  `,
})
export class DialogOverviewComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { overview: string },
    private router: Router // Inietta il Router
  ) { }

  navigateToHome() {
    this.router.navigate(['/']); // Purtroppo sembra non funzionare
  }
}