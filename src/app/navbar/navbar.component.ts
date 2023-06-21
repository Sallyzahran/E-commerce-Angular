import { Component } from '@angular/core';
import { CountService } from '../services/count.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  counter:number=0 ;


  constructor( private countService : CountService ){}



  ngOnInit(){

    this.countService.countValue.subscribe((res)=>this.counter=res)
  }

}
