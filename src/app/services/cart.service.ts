
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

   cartItemList : any =[]
   productList = new BehaviorSubject([]);
   totalPrice = new BehaviorSubject<number>(0);


  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }


  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.totalPrice.next(this.calculateTotalPrice());
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((cart:any)=>{
      grandTotal += cart.total;
    })
    return grandTotal;
  }




  removeCartItem(product: any){
    this.cartItemList.map((cart:any, index:any)=>{
      if(product.id=== cart.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    this.totalPrice.next(this.calculateTotalPrice());

  }

  calculateTotalPrice(): number {
    let total = 0;
    this.cartItemList.forEach((item: any) => {
       total += item.price;
    });
    return total;
 }




  
}