// import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$;


  constructor(private productsService : ProductsComponent) { }

  ngOnInit() {
    this.products$= this.productsService.getAll();
  }
 

}
