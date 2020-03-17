import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage {
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnIni(){}

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if(user){
      console.log('Usuario Registrado');
      this.router.navigateByUrl('/login');
    }
  }

}
