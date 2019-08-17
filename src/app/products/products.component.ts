import { Component, OnInit } from "@angular/core";
import { AppService } from "../service/app.service";
import { Product } from "../Product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: AppService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
