import { Injectable } from '@angular/core';
import { Item } from '../models/item.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Item[] = [];
  
  constructor() { }

  hello () {

  }

  goodbye () {

  }
  

}
