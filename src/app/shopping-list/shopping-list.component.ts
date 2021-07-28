import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] =[
    new Ingredient('Flour', 500),
    new Ingredient('Salt', 1),
    new Ingredient('Butter', 250)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addToList(newIngredient : Ingredient){
     this.ingredients.push(newIngredient);
  }
}
