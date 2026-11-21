import { CartService } from './../../services/cart.service';
import { Component, inject, input } from '@angular/core';
import { productModel } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product',
  styleUrl: './product.component.scss',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productInfo = input.required<productModel>();

  cartService = inject(CartService);

  addProduct(product: productModel) {
    this.cartService.addProductIntoCart(product);
  }
}
