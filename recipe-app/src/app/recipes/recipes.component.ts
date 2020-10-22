import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelected: Recipe = null;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected = recipe;
  }

}
