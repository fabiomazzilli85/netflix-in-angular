import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieListService } from '../services/movie-list.service';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CardComponent, NgFor, MatPaginatorModule, SearchComponent],
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent {
  myMovies: Movie[] = [];

  constructor(private movieListService: MovieListService) {}

  ngOnInit() {
    this.loadMovies(); // Carica i film iniziali
  }

  loadMovies() {
    this.myMovies = this.movieListService.userMovies; // Usa il getter per ottenere i film
  }

  removeFromList(movie: Movie) {
    this.movieListService.removeMovie(movie); // Rimuove il film dal servizio
    this.loadMovies(); // Ricarica i film per riflettere i cambiamenti
  }
}
