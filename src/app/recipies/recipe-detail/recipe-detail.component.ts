import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id: number;

  constructor(private servisRecepata: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.recipe = this.servisRecepata.getRecepiesbyID(this.id);
    }
    )
  }

  onAddIngredients(){
    this.servisRecepata.addOIngredientsToSL(this.recipe.ingredients);
  }

}
