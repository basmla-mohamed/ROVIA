import { FooterComponent } from './components/footer/footer.component';
import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { productModel } from './models/product.model';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomeComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    ProductComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ROVIA');

  products: productModel[] = [
    {
      id: 1,
      name: 'Watch',
      des: 'A stylish smartwatch with smart features for everyday use.',
      price: 1000,
      img: 'assets/1.jfif',
      badge: 'NEW ',
    },
    {
      id: 2,
      name: 'Camera',
      des: 'Capture your favorite moments with high-quality photography.',
      price: 700,
      badge: '',
      img: 'assets/2.jfif',
    },
    {
      id: 3,
      name: 'Earbuds',
      des: 'Enjoy clear sound and a comfortable wireless experience.',
      price: 1200,
      img: 'assets/3.jfif.webp',
      badge: 'NEW ARRIVAL',
    },
    {
      id: 4,
      name: 'Mouse',
      des: 'A smooth and comfortable mouse for daily productivity.',
      price: 300,
      img: 'assets/4.jfif',
      badge: '',
    },
    {
      id: 5,
      name: 'Keyboard',
      des: 'A modern keyboard designed for comfortable typing.',
      price: 200,
      img: 'assets/5.jfif',
      badge: 'NEW ARRIVAL',
    },
    {
      id: 6,
      name: 'iPhone',
      des: 'Experience modern technology and powerful performance.',
      price: 20000,
      img: 'assets/7.jfif',
      badge: '',
    },
    {
      id: 7,
      name: 'Smartphone',
      des: 'Stay connected with a stylish and powerful smartphone.',
      price: 5000,
      img: 'assets/8.jfif',
      badge: 'Modern',
    },
    {
      id: 8,
      name: 'phone',
      des: 'A modern phone designed to make everyday tasks easier.',
      price: 3000,
      img: 'assets/9.jfif',
      badge: '',
    },
    {
      id: 9,
      name: 'Coffee Machine',
      des: 'Prepare your favorite coffee and enjoy every moment.',
      price: 8000,
      img: 'assets/10.jpg',
      badge: 'NEW ',
    },
    {
      id: 10,
      name: 'Air Fryer',
      des: 'A convenient kitchen appliance for everyday cooking.',
      price: 1200,
      img: 'assets/11.jfif',
      badge: 'NEW ARRIVAL',
    },
    {
      id: 11,
      name: 'Shampoo',
      des: 'A hair care essential for your daily routine.',
      price: 100,
      img: 'assets/13.jfif',
      badge: '',
    },
    {
      id: 13,
      name: 'Perfume',
      des: 'A distinctive fragrance for every occasion.',
      price: 1900,
      img: 'assets/15.jfif',
      badge: '',
    },
  ];
}
