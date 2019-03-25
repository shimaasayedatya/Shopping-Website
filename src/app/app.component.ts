import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I-Shop';


  constructor(
    private userSrv: UserService,
    private authServ: AuthService,
    private route: ActivatedRoute, router: Router) {

    this.authServ.user$.subscribe(user => {
      if (user) {
        this.userSrv.save(user);
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        router.navigateByUrl(returnUrl);
      }

    })

  }
}

