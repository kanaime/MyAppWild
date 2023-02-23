import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/model/pokemon';

@Component({
  selector: 'app-pokemon-detail-component',
  templateUrl: './pokemon-detail-component.component.html',
  styleUrls: ['./pokemon-detail-component.component.css']
})
export class PokemonDetailComponentComponent {

  @Input() pokemon?: Pokemon;

}
