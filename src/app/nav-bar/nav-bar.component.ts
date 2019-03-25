import { UserInfo } from './../services/userInfo';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

appUser : UserInfo;

  constructor(private service: AuthService ) {
    this.service.AppUser$.subscribe(newappUser => this.appUser=newappUser);
    console.log(this.appUser);
   
   }
logout(){
  this.service.logout();
}
  ngOnInit() {
  }

}
