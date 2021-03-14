import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { EditItemComponent } from './admine/edit-item/admin';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "cart", component: CartComponent},
  { path: "admin", component: AdminHomeComponent},
  { path: "admin/add-item", component: AddItemComponent},
  { path: "admin/edit-item/:itemId", component: EditItemComponent},
  { path: "admin/items", component: ViewItemsComponent},
  // { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
