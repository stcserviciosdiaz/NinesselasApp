import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { User } from '../shared/user.class';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  user: User = new User();
  
  constructor(
    private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    private authSvc: AuthService) {}

  ngOnInit(){}

  async onLogin() {

    const user = await this.authSvc.onLogin(this.user);
    if(user){
      this.router.navigateByUrl('/home');
    }
  }

  

}