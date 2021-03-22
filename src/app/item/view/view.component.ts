import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/models/item.models';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item!: Item; 

  // Kõigepealt: saame numbri URLi seest kätte, (ActivatedRoute constructorisse)
  // selle abil saame õioge eseme serviceisty kätte (ItemService constructorisse)
  // anname selle eseme väärtuse siia klassimuutujale
  //klassimuutujast kuvame seda HTML-is

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('itemId'));
    this.item = this.itemService.itemsInService[id];
  }
  // Numbrist stringiks: 12.toString()  123123.toLocaleString('fr')
  // Stringist numbriks: NUmber("123") (Number)("3123");
  
  
  onRemoveFromCart(item: Item) {
    // {title: "PEALKIRI", price: 49, ...}
    
    let i = this.cartService.cartItems.findIndex(cartItem => item.title == cartItem.cartItem.title)
    if (i != -1) {
      if (this.cartService.cartItems[i].count == 1) {
      this.cartService.cartItems.splice(i,1);
      this.cartService.cartChanged.next(this.cartService.cartItems);
      } else {
        this.cartService.cartItems[i].count -= 1;
      }
      this.cartService.cartChanged.next(this.cartService.cartItems);
      }
      
    }
    onAddToCart(item: Item) {
        let i = this.cartService.cartItems.findIndex(cartItem => item.title == cartItem.cartItem.title)
      if (i != -1) {
        this.cartService.cartItems[i].count += 1;
      } else {
        this.cartService.cartItems.push({cartItem: item, count: 1});
            }
      this.cartService.cartChanged.next(this.cartService.cartItems);
       }
     
}


