import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Princes krofne', 'Slatko u kurac', 'http://www.recepti.com/img/recipe/31430-vocne-princes-krofne_zoom.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
