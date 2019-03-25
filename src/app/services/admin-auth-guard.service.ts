import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  userService: any;

  constructor(private userSrv: UserService) { }

  canActivate(): Observable<boolean> {
    return this.userSrv.AppUser$.map ((appUser:any) => appUser.isAdmin);
   }
  }

  