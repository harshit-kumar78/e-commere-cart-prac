import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product!: Product;

  @Output()
  updatecart = new EventEmitter<any>();

  isAdded: boolean = false;

  incQty() {
    this.product.qty++;
  }
  decQty() {
    if (this.product.qty > 1) {
      this.product.qty--;
    }
  }
  updateCart() {
    this.isAdded = !this.isAdded;
    let payload = {
      addTocart: this.isAdded,
      product: this.product,
    };
    this.updatecart.emit(payload);
  }
}
