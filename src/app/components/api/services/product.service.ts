import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProductList(){
    const URL = 'https://dummyjson.com/products';
    return this.http.get(URL);
  } 
}
