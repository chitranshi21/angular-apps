import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomatoes", 10)
  ];

  ingredientAdded:Subject<Ingredient[]> = new Subject<Ingredient[]>();

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  constructor() { }
}
