import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private shoppingListSubs: Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit():void {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.shoppingListSubs = this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  ngOnDestroy() {
    this.shoppingListSubs.unsubscribe();
  }

}
