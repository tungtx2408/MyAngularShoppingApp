import { Component, OnInit } from "@angular/core";
import { AppService } from "../service/app.service";
import { Product } from "../Product";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"]
})
export class NewProductComponent implements OnInit {
  product: Product = new Product();

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {}

  onSubmit(formAddnews) {
    this.appService.addProduct(this.product).subscribe(data => {
      this.router.navigate(["/products", data.id]);
    });
  }
}
