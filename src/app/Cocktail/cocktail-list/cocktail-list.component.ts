import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/service/cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit{
  cocktails: Cocktail[]=[];
  errorMsg: any;
  constructor(public cocktailService: CocktailService){

  }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((data)=>{
      this.cocktails = data;
    });

  }

}
