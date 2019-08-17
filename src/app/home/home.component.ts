import { Component, OnInit } from "@angular/core";
import { AppService } from "../service/app.service";
import { Product } from "../Product";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productService: AppService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.slice(0, 6);
    });
  }
}
