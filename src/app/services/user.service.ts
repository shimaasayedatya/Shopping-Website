import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { UserInfo } from './userInfo';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  map(arg0: (appUser: any) => any): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  AppUser$: any;

  constructor(
    private db: AngularFireDatabase,
    // private authSrv: AuthService
  ) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  getUser(uid: string) {
    return this.db.object('/users/' + uid)
  }
}

//   get AppUser$(): Observable<UserInfo> {
//     return this.authSrv.user$.switchMap(user => {
//       if (user) {
//         return this.getUser(user.uid).valueChanges();
//       }
//       else {
//         return Observable.of(null);

//       }
//     })

//   }
// }
