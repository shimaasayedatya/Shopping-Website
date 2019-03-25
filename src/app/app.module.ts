import { CategoriesService } from './services/categories.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  'rxjs/Rx';
import  'jquery';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AppRoutingModule } from './/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { environment } from 'src/environments/environment.prod';
import { CssAnimateComponent } from './css-animate/css-animate.component';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import { DataTablesModule } from 'angular-datatables';
// import "datatables.net";




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LoginComponent,
    CssAnimateComponent,
    LogoutComponent,
    HomeComponent,
    AdminUsersComponent,
    ProductFormComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,                     
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    // BrowserAnimationsModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
