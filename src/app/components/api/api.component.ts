import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class APIComponent {
  productList: any;
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProductList().subscribe((data : any) => {
      console.log('Products : ',data.products);
      this.productList = data.products;
    })
  }
}
