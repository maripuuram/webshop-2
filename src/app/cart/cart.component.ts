import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.models';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: {cartItem: Item, count: number}[] = [];
  sumOfCart: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.calculateSumOfCart();
    }

  onDeleteFromCart(index: number) {
    this.cartService.cartItems.splice(index,1);
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  onEmptyCart () {
  this.cartService.cartItems.splice(0);
  this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

calculateSumOfCart() {
  this.sumOfCart = 0;
  this.cartItems.forEach(item => {
    // this.sumOfCart = this.sumOfCart + item.price;
    this.sumOfCart += item.cartItem.price * item.count;
  });
}

  }
