

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

 private counter = new BehaviorSubject(0);
 countValue = this.counter.asObservable();

 constructor() { }

 setCounter(newValue : number){
   this.counter.next(newValue)
 }

 getCounter() {
   return this.counter.getValue();
 }
}


