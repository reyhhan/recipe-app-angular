import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
    new Recipe('Potato Crips','A quick and easy way of cooking lean flank steak..','https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg'),
    new Recipe('Chicken Masala','Sautéed shrimp with caramelized lemons','https://thumbs.dreamstime.com/b/collection-raw-food-close-up-119953690.jpg'),
    new Recipe('Pan-Fried Flank Steak','This easy flounder with Parmesan breadcrumbs','https://thumbs.dreamstime.com/b/diet-healthy-food-lifestyle-health-concept-sport-exercise-equipment-workout-and-gym-background-nutrition-detox-salad-f-179855057.jpg')
  ];
  @Output() recipeDetail= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeItem: Recipe){
    this.recipeDetail.emit(recipeItem);
  }
}
