import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'add', component: AddProductComponent, pathMatch: 'full' },
  { path: 'products', component: ProductListComponent, pathMatch: 'full'},
  { path: 'products/:id', component: ProductDetailComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
