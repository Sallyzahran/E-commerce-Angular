import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';


import * as productsData from 'src/assets/products.json';

// import * as productsData from 'src/assets/products.json';
import { Products  } from '../interfaces/products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products!: Products[] ; 
  constructor(private router: Router , private productService: ProductsService){}

 ngOnInit(){

  this.productService.getProduct().subscribe((res:any)=>this.products=res.products)
 }


 
  receiveFromChild(id:number){

       this.router.navigate(['product-details',id])

  }

}











