import { ProductsService } from './../../services/products.service';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  product={};
  categories$;
  id;

  constructor(private catgSvr : CategoriesService ,
    private productServices :ProductsService,
    private activateRoute :ActivatedRoute,
    private router :Router) { 
      this.categories$= catgSvr.getCategories();
     this.id = this.activateRoute.snapshot.paramMap.get('id');
      if(this.id){
        this.categories$= this.catgSvr.getCategories();
        this.productServices.getByID(this.id).take(1).subscribe( p=>{

        if(p){
          this.product = p;
        }
        });
      }
     }

  ngOnInit() {
  }

  save(product){
    if(this.id){
      this.productServices.update(this.id , product);
    }
    else
    {
      this.productServices.create(product);
    }
  
    this.router.navigateByUrl('/admin/products');
  }
  delete()
{
  if(confirm('Are You SURE you want to delete !')){
    this.productServices.Delete(this.id);
  }
  this.router.navigateByUrl('/admin/products');

}
}
