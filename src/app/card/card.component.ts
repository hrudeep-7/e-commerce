import { Component, Input } from '@angular/core';
import {Product} from './card.interface'
import { ProductService } from './card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?:Product;
 
  constructor(private productservice: ProductService) {}

  cartCount = 0;

  addToCart() {
    this.cartCount++;
  }
  removeFromCart() {
    if (this.cartCount > 0) {
      this.cartCount--;
    }
  }
  
}
