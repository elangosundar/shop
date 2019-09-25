import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private _router: Router) { }

  getBaseUrl() {
    return 'http://172.24.144.130:7000/api';
  }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    this.http.post(`${this.getBaseUrl()}/products/add`, obj)
      .subscribe(data => {
        this._router.navigate(['products'])
      });
  }

  getProducts() {
    // console.log(JSON.stringify(this.http.get(`${this.getBaseUrl()}products`)));
    return this.http.get(`${this.getBaseUrl()}/products`);
  }

  editProduct(id) {
    // console.log("url-->"+`${this.getBaseUrl()}/products/${id}`);
    return this.http.get(`${this.getBaseUrl()}/products/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    this
      .http
      .post(`${this.getBaseUrl()}/products/update/${id}`, obj)
      .subscribe(data => {
        this._router.navigate(['products'])
      });
  }

  deleteProduct(id) {
    return this.http.get(`${this.getBaseUrl()}/products/delete/${id}`);
  }

}
