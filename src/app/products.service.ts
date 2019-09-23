import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getBaseUrl() {
    return 'http://172.24.144.130:7000/api/';
  }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    // console.log(obj);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    this.http.post(`${this.getBaseUrl()}products/add`, obj)
      .subscribe(
        res => console.log('Done'),
      );
  }

  getProducts() {
    console.log(JSON.stringify(this.http.get(`${this.getBaseUrl()}products`)));
    return this.http.get(`${this.getBaseUrl()}products`);
  }

}
