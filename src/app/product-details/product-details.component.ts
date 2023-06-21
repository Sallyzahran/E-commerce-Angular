import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products  } from '../interfaces/products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

   products!: Products[] 


    


selectedProduct: any;
constructor(private activatedRoute : ActivatedRoute){}

ngOnInit(){

  console.log(this.activatedRoute.snapshot.params['id'])
  this.selectedProduct= this.products.find(product=>product.id ==this.activatedRoute.snapshot.params['id'])
  

}

}
