import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.models';
import { UniqueCategoryPipe } from '../pipes/unique-category.pipe';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsOriginal: Item[] = [];
  itemsShown: Item[] = [];
  titleSortNumber = 0;
  priceSortNumber = 0;
  itemCategories!: {category: string, isSelected: boolean}[];
  isLoading = false;
  //kuupaev = new Date ();


  constructor(private cartService: CartService,
    private itemService: ItemService,
    private uniqueCategoryPipe: UniqueCategoryPipe) { }

  ngOnInit(): void {
   this.isLoading = true;
    this.itemService.getItemsFromDatabase().subscribe(itemsFromFirebase => {
      this.itemsOriginal = [];
      this.itemService.itemsInService = [];
    for (const key in itemsFromFirebase) {
         const element = itemsFromFirebase[key];
        this.itemsOriginal.push(element);
        this.itemService.itemsInService.push(element);
  }
  this.itemsShown = this.itemsOriginal.slice();
  //mapiga eesmärk saada : [{category: "shoes"}"]
    this.itemCategories = this.uniqueCategoryPipe.transform(this.itemsOriginal).map(itemCategory => {
      return {category: itemCategory, isSelected: true}    
    });
    this.isLoading = false;
  })
}

onSelectCategory(index: number) {
  this.itemCategories[index].isSelected = !this.itemCategories[index].isSelected;
  this.itemsShown = this.itemsOriginal.filter(item=>{
   let category = this.itemCategories.find(itemCategory => {
          return item.category == itemCategory.category;
      })
      if (category?.isSelected == true) {
        return item;
      } else {
        return null;
      }
  })
  //this.itemsShown = this.itemsOriginal.filter()
}

  onSortTitle() {
    //this.itemService.saveItemsToDatabase();
    // sort(saab esimene, teise eseme) =>
    // funktsiooni ning tagastab võrreldud esemed
    // 10,1123,1,1231,1231,1,123,123
    if (this.titleSortNumber == 0) {
      this.itemsShown = this.itemsShown.sort((a, b) => 
        a.title.localeCompare(b.title)
        // ASCII tabelist
        );
        this.titleSortNumber = 1;
    } else if (this.titleSortNumber == 1) {
     this.itemsShown = this.itemsShown.sort((a, b) => 
        b.title.localeCompare(a.title)
      );
        this.titleSortNumber = 2;
    } else {
        this.itemsShown = this.itemService.itemsInService.slice();
        this.titleSortNumber = 0;
    }
      }

  onSortPrice() {
    if (this.priceSortNumber == 0) {
      this.itemsShown.sort ((a, b) => a.price - b.price);
      this.priceSortNumber = 1;
    } else if (this.priceSortNumber == 1) {
       this.itemsShown.sort((a, b) => b.price - a.price);
       this.priceSortNumber = 2; 
    } else {
      this.itemsShown = this.itemService.itemsInService.slice();
      this.priceSortNumber = 0;
    } 
     }

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

      

  

 