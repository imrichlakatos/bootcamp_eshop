import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CoreModule } from "./core/core.module";
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddProductComponent } from './admin/add-product/add-product.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        CartComponent,
        HomeComponent,
        ProductCardComponent,
        AddProductComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
    ]
})
export class AppModule { }
