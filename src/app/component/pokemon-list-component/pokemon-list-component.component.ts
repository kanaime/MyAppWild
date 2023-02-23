import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/model/pokemon';
import { PokedexService } from 'src/app/shared/service/pokedex.service';

@Component({
  selector: 'app-pokemon-list-component',
  templateUrl: './pokemon-list-component.component.html',
  styleUrls: ['./pokemon-list-component.component.css']
})
export class PokemonListComponentComponent {
  @Input() pokeList?: Pokemon[];
  pokemon?: Pokemon;

  @Output()
  public sendPokemonToParent: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  clik(poke: Pokemon){
    this.pokemon = poke;

    this.sendPokemonToParent.emit(this.pokemon);

  }



}
