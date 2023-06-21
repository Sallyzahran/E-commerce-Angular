import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';




const routes: Routes = [

{
 path:'',
 component : ProductListComponent,

},

{
  path:'registration',
  component : RegistrationComponent,
 
 },


{
  path:'login',
  component : LoginComponent,
 
 },
 {
  path:'cart',
  component : CartComponent,
 
 },
 {
  path:'product-details/:id',
  component : ProductDetailsComponent,
 
 },


 {
  path:'**',
  component : NotFoundComponent,
 
 },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
