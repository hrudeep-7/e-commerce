import { Component } from '@angular/core';
import {Product} from '../card/card.interface';
import { Product_List } from './details.constants';
import { ProductService } from '../card/card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  description='Paperkraft Expressions Gift Set (1 Metal Ball Pen with Gold trims + 1 Stainless steel Key Chain) | Elegant twist mechanism with 0.7mm Tip'
  products:Product[]= Product_List
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    });
  }
}


//use http client to call api and load products
//use loaders
//minimise from cart along with add
// cumulative cart count



