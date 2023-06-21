
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { ConfirmedValidator } from './confirmpassword.validators';
import { UsernameValidator } from './username.validators';







@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent {
registrationForm : FormGroup;



constructor(private fb: FormBuilder){

  this.registrationForm = this.fb.group({

    name:['',[Validators.required]],
    email:['',[
      Validators.required,
      Validators.pattern("[^@\s]+@[^@\s]+\.[^@\s]+")
      
    ]],

    
  username:['',[Validators.required,  UsernameValidator.cannotContainSpace]],
   password:['',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]')]],
               
   confirmPassword: ['', Validators.required]
}, {
  validator: ConfirmedValidator('password', 'confirmPassword')
  
 
})
}




submitReForm(){

  console.log(this.registrationForm)
}




}

