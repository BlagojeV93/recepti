import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

 private ingredients: Ingredient [] = [
    new Ingredient ('Jabuke', 5),
    new Ingredient ('Kruske', 100)
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredients: Ingredient) {
    this.ingredients.push(newIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientse(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() { }

}
