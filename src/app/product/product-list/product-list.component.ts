import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = [
    {'name':'Apple','description':'This is a fruit'},
    {'name':'Orange','description':'This is a fruit'},
    {'name':'Mango','description':''}
    ];
  constructor() { }

  ngOnInit() {
  }

  addToCart(){

  }
  
  checkOut(){

  }

}