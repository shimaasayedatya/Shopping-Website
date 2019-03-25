import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products').snapshotChanges();
  }

  getByID(productID:string){
    return this.db.object('/products'+ productID).valueChanges();
  }

  update(productID : string , product){
    return this.db.object('/products'+ productID).update(product);
  }
  Delete(productID : string){
    return this.db.object('/products'+ productID).remove();

}
}