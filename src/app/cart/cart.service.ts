import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // [{title:"PEALKIRI", price: 49,...}]
  //koguse panemiseks tuleks ülemise read kokku koodada [], loome objekt objektis
//[
//{cartItem: {title:"PEALKIRI", ...}}
//] lõpuks on selle asemel nö Item lühendatult {cartItem: Item, count: 1}

  cartItems: {cartItem: Item, count: number}[] = [];
  cartChanged = new Subject<{cartItem: Item, count: number}[]>();
  
  constructor() { }

}
