import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Gnocchi", "A type of pasta", "https://loremflickr.com/320/240/pasta"),
    new Recipe("Curry", "A type of Indian dish", "https://loremflickr.com/320/240/dinner")
  ];
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe:Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
