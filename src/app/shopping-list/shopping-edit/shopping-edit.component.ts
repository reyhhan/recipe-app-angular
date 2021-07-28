import { Component, ElementRef, OnInit, ViewChild,Input, Output ,EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() getIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true}) nameInput : ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.getIngredient.emit({
     name : this.nameInput.nativeElement.value,
     amount: this.amountInput.nativeElement.value
    })
  }

}
