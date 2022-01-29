import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {
product: Product;
  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
  }

}
