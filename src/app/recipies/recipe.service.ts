import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Princes krofne', 'Slatko u kurac', 'http://www.recepti.com/img/recipe/31430-vocne-princes-krofne_zoom.jpg'),
    new Recipe('Papazjanija', 'OK jelo', 'http://secanja.com/wp-content/uploads/2015/09/papazjanija.jpg')
  ]

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }

}
