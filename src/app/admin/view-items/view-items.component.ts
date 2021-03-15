import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.models';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = this.itemService.itemsInService;
    this.itemService.getItemsFromDatabase().subscribe(items => {
      console.log("Olen võtmas uusi esemeid");
      this.items = [];
      this.itemService.itemsInService = [];

      for (const key in items) {
          const element = items[key];
          this.items.push(element);
          this.itemService.itemsInService.push(element);
        }
      
            //this.items = items;
           // this.itemService.itemsInService = items;
          })
          console.log("Töötlen neid esemeid");
  }

  onDeleteItem(i: number) {
    this.itemService.itemsInService.splice(i,1);
    this.itemService.saveItemsToDatabase();
    this.items.splice(i, 1);
  }
}

