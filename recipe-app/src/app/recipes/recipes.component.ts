import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  recipeSelected: Recipe = null;
  private recipeSelectedSubs: Subscription;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeSelectedSubs = this.recipeService.recipeSelected.subscribe((recipe: Recipe) =>
      this.recipeSelected = recipe);
  }

  ngOnDestroy() {
    this.recipeSelectedSubs.unsubscribe();
  }

}
