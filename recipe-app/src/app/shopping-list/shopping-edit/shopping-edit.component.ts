import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput", { static: true }) name: ElementRef;
  @ViewChild("amountInput", { static: true }) amount: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredientName = this.name.nativeElement.value;
    const ingredientAmount = this.amount.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(ingredientName,ingredientAmount));
  }

}
