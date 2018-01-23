import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Princes krofne', 'Slatko u kurac', 'https://coolinarika.azureedge.net/images/_variations/0/1/01dc7f25b11472d661ecfa8670254af1_header.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
