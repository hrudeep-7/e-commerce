import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Product} from './card.interface'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?:Product;
  @Output() cartUpdated = new EventEmitter<{id?:number,value:1|-1}>();
  constructor() {}
 

  addToCart(id?:number) {
    this.cartUpdated.emit({id,value:1});
  }
  removeFromCart(id?:number) {
    this.cartUpdated.emit({id,value:-1});
  }
  
}
