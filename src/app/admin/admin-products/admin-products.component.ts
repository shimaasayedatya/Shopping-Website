import { DataTablesModule } from 'angular-datatables';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy ,OnInit{
 

  products : any[];
  filteredProducts : any[];
  SubScribe : Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any>= new Subject();


  constructor(private productsServices : ProductsService) {
      this.SubScribe=   this.productsServices.getAll().
      subscribe(products =>
        { this.filteredProducts = this.products = products;
          // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
          }
       );
    }


  filter(queryString : string){
    if(queryString){
      this.filteredProducts = 
      this.products.filter
      (p => p.payload.val().
      title.toLowerCase().includes(queryString.toLocaleLowerCase()))
    }
      else{
        this.filteredProducts= this.products;

      }
    }
    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 1
      };
    }
  ngOnDestroy(): void {
    this.SubScribe.unsubscribe(); 
   }

}
