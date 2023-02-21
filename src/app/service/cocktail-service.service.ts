import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Array<Cocktail>{
    let cocktails = [
      new Cocktail('cocktail 1', 5, 'https://www.siroter.com/cocktails/moyen/daikiri-cocktail-1019.jpg'),
      new Cocktail('cocktail 2', 6, 'https://www.siroter.com/cocktails/moyen/daikiri-cocktail-1019.jpg'),
      new Cocktail('cocktail 3', 7, 'https://www.siroter.com/cocktails/moyen/daikiri-cocktail-1019.jpg'),
      new Cocktail('cocktail 4', 3, 'https://www.siroter.com/cocktails/moyen/daikiri-cocktail-1019.jpg'),
    ];

    return cocktails;
  }
}
