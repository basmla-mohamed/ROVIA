import { productCartModel } from '../models/product.model';
import { productModel } from '../models/product.model';
import { computed, Service, signal } from '@angular/core';
import Swal from 'sweetalert2';

@Service()
export class CartService {
  cartProducts = signal<productCartModel[]>([]); //to get all data from parent(app.ts)

  totalPrice = computed(() => {
    return this.cartProducts().reduce((total, current) => {
      return total + current.price * current.quantity;
    }, 0);
  });

  totalItems = computed(() => {
    return this.cartProducts().reduce((total, current) => {
      return total + current.quantity;
    }, 0);
  });

  addProductIntoCart(product: productModel) {
    this.cartProducts.update((val) => {
      let isExist = this.cartProducts().some((item) => {
        return item.id === product.id;
      });

      if (isExist) {
        return val.map((item) => {
          if (item.id == product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...val, { ...product, quantity: 1 }];
      }
    });
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: 'Product Added To Cart!',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: '#32131F',
      color: '#fff',
      iconColor: '#70C995',
    });
    localStorage.setItem('products', JSON.stringify(this.cartProducts()));
  }

  subtractProductFromCart(productId: number) {
    this.cartProducts.update((val) => {
      return val
        .map((item) => {
          if (item.id == productId) {
            item.quantity--;
            return { ...item }; //rebuild the object to make the arr note we have a change happen
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: 'Product Removed From Cart!',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: '#32131F',
      color: '#fff',
      iconColor: '#E88B8B',
    });
    localStorage.setItem('products', JSON.stringify(this.cartProducts()));
  }

  removeItem(productId: number) {
    this.cartProducts.update((val) => val.filter((item) => item.id != productId));
    //filter بترجع كله ماعدا اللي اختارته

    localStorage.setItem('products', JSON.stringify(this.cartProducts()));
  }

  clearCart() {
    this.cartProducts.set([]);
    localStorage.setItem('products', JSON.stringify(this.cartProducts()));
  }

  constructor() {
    let oldData = localStorage.getItem('products');

    if (oldData == null) {
      localStorage.setItem('products', JSON.stringify(this.cartProducts()));
    } else {
      this.cartProducts.set(JSON.parse(oldData));
    }
  }
}
//we create services to use what i want from it in any component by inject
