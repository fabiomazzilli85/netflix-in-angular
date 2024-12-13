import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieListService } from '../services/movie-list.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent implements OnInit {
  movieId: number | null = null;
  movieDetails: any = null;
  router: any;

  constructor(private route: ActivatedRoute, private movieService: MovieListService) {}

  ngOnInit(): void {
    // Recupera l'ID del film dalla rotta
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.movieId) {
      // Effettua una chiamata API per i dettagli del film
      this.movieService.getMovieDetails(this.movieId).subscribe(
        (details) => {
          this.movieDetails = details;
        },
        (error) => {
          console.error('Errore nel recupero dei dettagli del film:', error);
        }
      );
    }
  }
}
