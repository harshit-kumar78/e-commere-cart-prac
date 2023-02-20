import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  products: Product[] = [
    { name: 'pen', qty: 3, price: 50 },
    { name: 'mobile', qty: 5, price: 9000 },
    { name: 'laptop', qty: 5, price: 50000 },
  ];
  cartbucket: Product[] = [];
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng changes called');
  }

  update(payload: any) {
    if (payload.addTocart) {
      this.cartbucket.push(payload.product);
    } //remove logic
    else {
      this.cartbucket = this.cartbucket.filter((v) => v !== payload.product);
      console.log(this.cartbucket);
    }
  }
  calPrice() {
    let totalPrice = 0;
    this.cartbucket.forEach((item) => {
      totalPrice = totalPrice + item.qty * item.price;
    });
    return totalPrice;
  }
  paid() {
    alert('paid successfully');
  }
}
