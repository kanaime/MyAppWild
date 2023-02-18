import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './block-profil/sign-up/sign-up.component';
import { UserProfilComponent } from './block-profil/user-profil/user-profil.component';
import { SearchMovieComponent } from './block/search-movie/search-movie.component';

const routes: Routes = [
  {path: 'sign-up', component:SignUpComponent},
  {path: 'user', component:UserProfilComponent},
  {path: '', component:UserProfilComponent},
  {path: 'search-movie', component:SearchMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
