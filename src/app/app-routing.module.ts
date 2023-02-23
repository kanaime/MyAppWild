import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';
import { PokedexPageComponentComponent } from './pages/pokedex-page-component/pokedex-page-component.component';
const routes: Routes = [
  {path: '', component:PokedexPageComponentComponent},
  {path: 'create', component:CreatePokemonPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
