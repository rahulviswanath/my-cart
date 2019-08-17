import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemCountService {

  private itemCountSource = new BehaviorSubject(0);
  currentItemCount = this.itemCountSource.asObservable();

  constructor() { }

  itemCountUp(){
    // this.itemCountSource.next(this.currentItemCount++);
  }
  itemCountDown(){

  }
}
