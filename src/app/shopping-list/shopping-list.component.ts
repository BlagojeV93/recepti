import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient [];
  private sub: Subscription;

  constructor(private sopingLista: ShoppingListService) { }


  ngOnInit() {
    this.ingredients = this.sopingLista.getIngredient();
   this.sub = this.sopingLista.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients}
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
