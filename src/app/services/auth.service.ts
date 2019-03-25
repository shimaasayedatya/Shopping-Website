import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {ActivatedRoute} from '@angular/router';
import { UserInfo } from './userInfo';
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth ,
    private authSvr : UserService,
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }
  login() {
    //let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
    //localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

  get AppUser$(): Observable<UserInfo> {
    return this.user$.switchMap(user => {
      if (user) {
        return this.authSvr.getUser(user.uid).valueChanges();
      }
      else {
        return Observable.of(null);

      }
    })
}}
