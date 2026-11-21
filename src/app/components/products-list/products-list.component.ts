import { Component, input } from '@angular/core';
import { ProductComponent } from './../product/product.component';
import { productModel } from '../../models/product.model';

@Component({
  imports: [ProductComponent],
  selector: 'app-products-list',
  styleUrl: './products-list.component.scss',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  products = input.required<productModel[]>();
}
