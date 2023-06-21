import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Products  } from '../interfaces/products';
import { CartService } from '../services/cart.service';
import { CountService } from '../services/count.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  counter:number=0 ;

  @Input() productItem !:Products
  @Output() emitFromChild = new EventEmitter()
  constructor(private router: Router , private countService : CountService , private cartservice: CartService ){}

  emitToParent(id:number){

   /// this.router.navigate(['product-details',id])
   this.emitFromChild.emit(id)
  }


  ngOnInit(){

    this.countService.countValue.subscribe((res)=>this.counter=res)
  }

  increaseCounter(){
    this.countService.setCounter(++this.counter)
  }

  addtocart(item: any){
     this.cartservice.addtoCart(item)
  }


}
