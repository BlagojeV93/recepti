import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

 private ingredients: Ingredient [] = [
    new Ingredient ('Jabuke', 5),
    new Ingredient ('Kruske', 100)
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredients: Ingredient) {
    this.ingredients.push(newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientse(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  constructor() { }

}
