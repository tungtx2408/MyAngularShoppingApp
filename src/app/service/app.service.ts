import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Product } from "../Product";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private API: string = "http://5d484a862d59e50014f20a52.mockapi.io";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API}/products`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.API}/products`, product);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.API}/products/${id}`);
  }

  editProduct(product): Observable<Product> {
    return this.http.put<Product>(
      `${this.API}/products/${product.id}`,
      product
    );
  }

  deleteProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/products/${id}`);
  }
}
