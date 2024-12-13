import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments';
import { Movie } from '../models/movie.model';

interface MoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  private http = inject(HttpClient);
  private url = environment.url;
  private apiKey = environment.apiKey;

  private allMovies: Movie[] = [];

  // Getter per ottenere sempre la lista aggiornata dei film
  get userMovies(): Movie[] {
    const savedMovies = localStorage.getItem('userMovies');
    try {
      return savedMovies ? JSON.parse(savedMovies) : [];
    } catch (e) {
      return [];
    }
  }

  // Aggiorna la lista dei film sia in memoria sia in localStorage
  private setUserMovies(movies: Movie[]): void {
    localStorage.setItem('userMovies', JSON.stringify(movies));
  }

  // Recupera i film dalla API
  getMovies(query: string, page: number): Observable<MoviesResponse> {
    const params = {
      api_key: this.apiKey,
      language: 'en-US',
      query,
      page,
    };
    return this.http.get<MoviesResponse>(this.url, { params });
  }

  // Aggiunta film
  addMovie(movie: Movie): void {
    const currentMovies = this.userMovies; // Usa il getter per ottenere l'array aggiornato
    if (!currentMovies.find((m) => m.id === movie.id)) {
      currentMovies.push(movie);
      this.setUserMovies(currentMovies); // Usa il setter per aggiornare localStorage
    }
  }

  // Rimozione Film (da rivedere)
  removeMovie(movie: Movie): void {
    const updatedMovies = this.userMovies.filter((m) => m.id !== movie.id);
    this.setUserMovies(updatedMovies); // Usa il setter per aggiornare localStorage
  }

  // Recupera i film filtrati (escludendo quelli già presenti nella lista dell'utente)
  getFilteredMovies() {
    const filteredMovies = this.allMovies.filter(
      (movie) => !this.userMovies.find((userMovie) => movie.id === userMovie.id)
    );
    return filteredMovies;
  }

  // Imposta la lista di tutti i film (utilizzata per filtrare i film)
  setAllMovies(movies: Movie[]) {
    this.allMovies = movies;
  }

  // Dettaglio Film
  getMovieDetails(id: number): Observable<any> {
    const params = {
      api_key: 'e99307154c6dfb0b4750f6603256716d',
      language: 'en-US',
    };
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, { params });
  }
}
