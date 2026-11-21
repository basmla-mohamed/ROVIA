import { CartService } from './../../services/cart.service';
import { Component, input, inject } from '@angular/core';
import { productCartModel } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-item',
  styleUrl: './cart-item.component.scss',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  cartItem = input.required<productCartModel>();
  cartService = inject(CartService);
}
