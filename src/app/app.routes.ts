import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MyListComponent } from './my-list/my-list.component';
import { FilmComponent } from './film/film.component';
import { SerieTvComponent } from './serie-tv/serie-tv.component';
import { FilmScorseseComponent } from './film-scorsese/film-scorsese.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'mia-lista', component: MyListComponent},
  { path: 'film', component: FilmComponent },
  { path: 'serie-tv', component: SerieTvComponent },
  { path: 'dettaglio/:id', component: DettaglioComponent},
  { path: 'film-scorsese/:id', component: FilmScorseseComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent },

];

