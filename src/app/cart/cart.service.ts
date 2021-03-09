import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Item[] = [];
  cartChanged = new Subject<Item[]>();
  
  constructor() { }

  hello () {

  }

  goodbye () {

  }
  

}
