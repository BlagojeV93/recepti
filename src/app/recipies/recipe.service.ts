import { Injectable } from '@angular/core';
import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private sopingLista: ShoppingListService) { }


  private recipes: Recipe[] = [
    new Recipe('Princes krofne', 'Slatko u kurac', 'http://www.recepti.com/img/recipe/31430-vocne-princes-krofne_zoom.jpg', 
    [
      new Ingredient ('Slag', 4),
      new Ingredient ('Kore', 10),
      new Ingredient ('Secer', 2),
    ]
  ),
    new Recipe('Papazjanija', 'OK jelo', 'http://secanja.com/wp-content/uploads/2015/09/papazjanija.jpg',
   [
     new Ingredient ('Mesina', 10),
     new Ingredient ('Povrce', 20), 
   ]),
    
  ]

  getRecipes(){
    return this.recipes.slice();
  }

  getRecepiesbyID(index: number) {
    return this.recipes[index];
  }

  addOIngredientsToSL(ingredient: Ingredient[]){
    this.sopingLista.addIngredientse(ingredient);
  }

 

}
