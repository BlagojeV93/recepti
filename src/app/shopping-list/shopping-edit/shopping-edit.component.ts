import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private sopingLista: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    const NInput = this.nameInputRef.nativeElement.value;
    const AInput = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient (NInput, AInput);
    this.sopingLista.addIngredient(newIngredient);
  }

}
