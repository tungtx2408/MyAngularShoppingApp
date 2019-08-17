import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductsComponent } from "./products/products.component";
import { ManagerComponent } from "./manager/manager.component";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NewProductComponent } from './new-product/new-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ManagerComponent,
    NotFoundComponent,
    ProductDetailComponent,
    NewProductComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: "AIzaSyBZqkJPckg53dRmjVerZkSLn1sUwCgspdo" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
