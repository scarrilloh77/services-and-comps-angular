import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() myProduct: Product = {
    id: '',
    name: '',
    price: 0,
    image: '',
  };
  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.myProduct);
  }
}
