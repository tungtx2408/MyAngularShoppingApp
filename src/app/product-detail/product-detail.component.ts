import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../service/app.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private routes: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.routes.params.subscribe(param => {
      this.appService.getProduct(param.id).subscribe(data => {
        this.product = data;
      });
    });
  }
}
