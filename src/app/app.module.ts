import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from
    '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokedexPageComponentComponent } from './pages/pokedex-page-component/pokedex-page-component.component';
import { PokemonListComponentComponent } from './component/pokemon-list-component/pokemon-list-component.component';
import { PokemonDetailComponentComponent } from './component/pokemon-detail-component/pokemon-detail-component.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';
@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponentComponent,
    PokemonListComponentComponent,
    PokemonDetailComponentComponent,
    CreatePokemonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
