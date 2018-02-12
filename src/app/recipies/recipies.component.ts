import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {

  MainSelectedRecipe : Recipe;
  
  constructor(private servisRecepata: RecipeService) { }

  ngOnInit() {
    this.servisRecepata.recipeSelected.subscribe(
      (recepti: Recipe) => {
        this.MainSelectedRecipe = recepti;
      }
    )
  }

}
 