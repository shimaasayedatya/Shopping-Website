import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';



const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  {path: '', component: ProductsComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'orders' , component:MyOrdersComponent, canActivate :[AuthGuard]},
  {path: 'admin/orders' , component:AdminOrdersComponent , canActivate :[AuthGuard,AdminAuthGuardService]},
  {path: 'admin/products' , component:AdminProductsComponent , canActivate :[AuthGuard,AdminAuthGuardService]},
  {path: 'admin/products/:id' , component:ProductFormComponent , canActivate :[AuthGuard,AdminAuthGuardService]},
  {path: 'admin/products/new' , component:ProductFormComponent , canActivate :[AuthGuard,AdminAuthGuardService]},
  {path: 'admin/users' , component:AdminUsersComponent , canActivate :[AuthGuard,AdminAuthGuardService]},
  {path: 'shopping-cart' , component:ShoppingCartComponent},
  {path: 'logout' , component:LogoutComponent},




];
@NgModule({
  imports: [
   [ RouterModule.forRoot(routes) ],
    CommonModule
  ],
  declarations: [],

  exports: [RouterModule]

})
export class AppRoutingModule { }
