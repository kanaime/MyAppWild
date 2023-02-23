import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly pokemonApi = "assets/pokemons-mock.ts";
  constructor(public http: HttpClient) { }

  public getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonApi);
  }

}
