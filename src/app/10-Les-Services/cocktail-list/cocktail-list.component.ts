import { Component } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/service/cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  cocktails: Cocktail[]=[];
  constructor(public cocktailService: CocktailService){

    this.cocktails=this.cocktailService.getCocktails();
    console.log(this.cocktails);

  }

}
