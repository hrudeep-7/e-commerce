import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Product} from './card.interface'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?:Product;
  @Output() cartUpdated = new EventEmitter<number>();
  constructor() {}

  cartCount = 0;

  addToCart() {
    this.cartCount++;
    this.cartUpdated.emit(1);
  }
  removeFromCart() {
    if (this.cartCount > 0) {
      this.cartCount--;
      this.cartUpdated.emit(-1);
    }
  }
  
}
