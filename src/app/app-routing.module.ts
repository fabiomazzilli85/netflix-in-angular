import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmScorseseComponent } from './film-scorsese/film-scorsese.component'; 
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyListComponent } from './my-list/my-list.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'film-scorsese/:id', component: FilmScorseseComponent },
  { path: 'dettaglio/:id', component: DettaglioComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'mia-lista', component: MyListComponent },
  { path: 'logout', component: LogoutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
