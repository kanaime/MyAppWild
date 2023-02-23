import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/model/pokemon';
import { PokedexService } from 'src/app/shared/service/pokedex.service';

@Component({
  selector: 'app-pokedex-page-component',
  templateUrl: './pokedex-page-component.component.html',
  styleUrls: ['./pokedex-page-component.component.css']
})
export class PokedexPageComponentComponent {
  pokemonList: Pokemon[] =[];
  poke?: Pokemon;
  show = false;

  onReceivePokemon(pokemon: Pokemon){

    this.poke = pokemon;
    this.show = true


  }

  constructor(service: PokedexService){
    service.getPokemons().subscribe((data)=>{
      this.pokemonList = data;
      console.log(this.pokemonList);
    });
  }

}
