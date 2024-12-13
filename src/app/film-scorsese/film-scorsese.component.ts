import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieListService } from '../services/movie-list.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-film-scorsese',
  templateUrl: './film-scorsese.component.html',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
  ],
  styleUrls: ['./film-scorsese.component.css'],
})
export class FilmScorseseComponent implements OnInit {
  movie: any;
  scorseseMovies: any[] = [
    {
      title: 'Goodfellas',
      release_date: '1990-09-12',
      overview: 'La storia di un giovane che cresce nel mondo del crimine organizzato, diventando un mafioso rispettato, ma che vede la sua vita prendere una piega drammatica tra tradimenti, violenza e la difficoltà di uscire da un mondo così pericoloso.',
      genres: ['Crime', 'Drama'],
      runtime: 146,
      vote_average: 8.7
    },
    {
      title: 'Taxi Driver',
      release_date: '1976-02-08',
      overview: 'Un veterano del Vietnam alienato dalla società lavora come tassista notturno a New York, ma la sua crescente paranoia e instabilità mentale lo portano a pianificare atti estremi di violenza per combattere ciò che percepisce come il degrado morale della città.',
      genres: ['Crime', 'Drama', 'Thriller'],
      runtime: 114,
      vote_average: 8.3
    },
    {
      title: 'The Irishman',
      release_date: '2019-11-01',
      overview: 'La storia di Frank Sheeran, un sicario al servizio della mafia, che riflette sulla sua vita fatta di crimini, tradimenti e relazioni difficili, culminando nel mistero della scomparsa del leader sindacale Jimmy Hoffa.',
      genres: ['Crime', 'Drama'],
      runtime: 209,
      vote_average: 8.0
    },
    {
      title: 'Raging Bull',
      release_date: '1980-11-14',
      overview: 'La storia del pugile Jake LaMotta, la cui carriera di successo è oscurata dalla sua vita personale tumultuosa, caratterizzata da gelosia, violenza e il lento crollo delle sue relazioni personali e della sua autostima.',
      genres: ['Biography', 'Drama', 'Sport'],
      runtime: 129,
      vote_average: 8.2
    },
    {
      title: 'Casino',
      release_date: '1995-11-22',
      overview: 'La storia di un manager di casinò che cerca di mantenere il controllo in un mondo dominato da criminalità organizzata, avidità e tradimenti, mettendo a rischio la sua carriera e le sue relazioni personali.',
      genres: ['Crime', 'Drama'],
      runtime: 178,
      vote_average: 8.2
    },
    {
      title: 'The Departed',
      release_date: '2006-10-06',
      overview: 'Un poliziotto sotto copertura e una talpa della mafia operano all’interno dei rispettivi schieramenti, portando a un gioco di inganni e tensioni mentre cercano di scoprire l’identità dell’altro.',
      genres: ['Crime', 'Drama', 'Thriller'],
      runtime: 151,
      vote_average: 8.5
    },
    {
      title: 'Gangs of New York',
      release_date: '2002-12-20',
      overview: 'La lotta tra bande rivali nella New York del XIX secolo è raccontata attraverso la storia di un giovane che cerca vendetta contro il leader di una delle bande, mentre la città è sconvolta da violenza, corruzione e trasformazioni sociali.',
      genres: ['Crime', 'Drama', 'History'],
      runtime: 167,
      vote_average: 7.5
    },
    {
      title: 'Shutter Island',
      release_date: '2010-02-19',
      overview: 'Un investigatore dell’FBI viene mandato su un’isola remota per indagare sulla scomparsa di una paziente in un manicomio criminale, ma scopre oscuri segreti che mettono in discussione la sua sanità mentale e la realtà stessa.',
      genres: ['Mystery', 'Thriller'],
      runtime: 138,
      vote_average: 8.1
    }
  ];
  

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieListService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
     this.movie = this.scorseseMovies.find(movie => movie.title.toLowerCase() === movieId.toLowerCase());
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}