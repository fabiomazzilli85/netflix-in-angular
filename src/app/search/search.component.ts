import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink, Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { Movie } from '../models/movie.model';
import { MovieListService } from '../services/movie-list.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    CardComponent,
    NgFor,
    RouterLink,
    MatPaginatorModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  movies: Movie[] = [];
  searchResults: any[] = [];
  selectedMovie: Movie | null = null;

  currentPage = 1;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  totalItems = 0;

  scorseseMoviesTitles: string[] = [
    'Goodfellas',
    'Taxi Driver',
    'The Irishman',
    'Raging Bull',
    'Casino',
    'The Departed',
    'Gangs of New York',
    'Shutter Island',
  ];

  constructor(private router: Router, private moviesServices: MovieListService) {}

  ngOnInit(): void {
    this.search(this.currentPage, this.pageSize); 
  }

  search(page: number, pageSize: number) {
    // Controlla se la query corrisponde a un film di Martin Scorsese
    const normalizedQuery = this.searchQuery.toLowerCase();
    const scorseseMovie = this.scorseseMoviesTitles.find(
      (title) => title.toLowerCase() === normalizedQuery
    );
  
    if (scorseseMovie) {
      // Se è un film di Scorsese, reindirizza al componente FilmScorsese
      this.router.navigate(['/film-scorsese', scorseseMovie]);
      return;
    }

    // Altrimenti esegue la ricerca generale
    this.moviesServices.getMovies(this.searchQuery, page).subscribe(
      (response) => {
        this.moviesServices.setAllMovies(response.results); // Salva tutti i film
        this.movies = this.moviesServices.getFilteredMovies(); // Ottieni i film filtrati (non aggiunti alla lista dell'utente)
        this.totalItems = response.total_results;
      },
      (error) => {
        console.error('Errore durante la ricerca dei film:', error);
      }
    );
  }

  addToMyList(movie: Movie) {
    this.moviesServices.addMovie(movie);
    this.movies = this.moviesServices.getFilteredMovies(); // Ricarica i film filtrati dopo l'aggiunta
  }

  onPageChange(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.pageSize = pageEvent.pageSize;
    this.search(this.currentPage, this.pageSize); // Esegui la ricerca per la nuova pagina
  }

  onLogout() {
    // Rimuovo l'utente dal localStorage
    localStorage.removeItem('user');

    // Reindirizza alla pagina di login
    this.router.navigate(['/login']);
  }
}
