import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected2 = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Princes krofne', 'Slatko u kurac', 'http://www.recepti.com/img/recipe/31430-vocne-princes-krofne_zoom.jpg'),
    new Recipe('Papazjanija', 'OK jelo', 'http://secanja.com/wp-content/uploads/2015/09/papazjanija.jpg')
  ]
  

  constructor() { }

  ngOnInit() {
  }

  onSelected2(recipe: Recipe){
    this.recipeSelected2.emit(recipe);
  }
}
