import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes:Recipe[] = [
    new Recipe("Gnocchi", "A type of pasta", "https://loremflickr.com/320/240/pasta"),
    new Recipe("Curry", "A type of Indian dish", "https://loremflickr.com/320/240/dinner")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id:number) {
    return this.recipes.slice()[id];
  }

  constructor() { }
}
