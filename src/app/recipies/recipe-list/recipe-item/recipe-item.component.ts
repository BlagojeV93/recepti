import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe-model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recepti: Recipe;

  constructor(private servisRecepata: RecipeService) { }

  onSelected(){
    this.servisRecepata.recipeSelected.emit(this.recepti);
  }

  ngOnInit() {
  }

}
