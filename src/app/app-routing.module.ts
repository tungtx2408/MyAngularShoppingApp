import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductsComponent } from "./products/products.component";
import { ManagerComponent } from "./manager/manager.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "products/edit/:id", component: ProductEditComponent },
  { path: "manager", component: ManagerComponent },
  { path: "product/new", component: NewProductComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
