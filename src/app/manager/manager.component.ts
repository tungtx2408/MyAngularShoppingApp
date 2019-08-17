import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { AppService } from "../service/app.service";

@Component({
  selector: "app-manager",
  templateUrl: "./manager.component.html",
  styleUrls: ["./manager.component.scss"]
})
export class ManagerComponent implements OnInit {
  products: Product[];
  constructor(private productService: AppService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  removeProduct(product) {
    this.productService.deleteProduct(product.id).subscribe(data => {
      this.products = this.products.filter(item => item.id != data.id);
    });
  }
}
