import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "../service/app.service";
import { Product } from "../Product";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

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

  onSubmit(formAddNews) {
    this.appService.editProduct(this.product).subscribe(data => {
      this.router.navigate(["/products", data.id]);
    });
  }
}
