import { Component ,Input} from '@angular/core';
import { Products  } from '../interfaces/products';
import { CartService } from '../services/cart.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  constructor(private cartService : CartService) { }

  products!: Products[] ; 
  totalPrice: number=0;



 

    ngOnInit(): void {

        this.cartService.getProducts()
        .subscribe(res=>{
          this.products = res;
      this.totalPrice = this.cartService.calculateTotalPrice();

      this.products.map((item)=>{

        item.quantity=1;
        return item;
      })
      console.log(this.products);
        })
      }

  



  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }






  increaseCounter(id:number){
this.products.filter((product)=>product.id==id).map((product)=>{

  product.quantity=product.quantity!+1;
  return product;
})
  }





  decreaseCounter(id:number){
    this.products.filter((product)=>product.id==id).map((product)=>{
    
      product.quantity=product.quantity!;
      product.quantity--;
      return product.quantity--;
    })
      }
    

}

  





