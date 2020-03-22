import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { User } from '../shared/user.class';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  user: User = new User();
  
  constructor(
    private router: Router,
    public alertController: AlertController, 
    public ngxSmartModalService: NgxSmartModalService,
    private authSvc: AuthService) {}

  ngOnInit(){}

  async onLogin() {

    const user = await this.authSvc.onLogin(this.user);
    if(user){
      this.presentAlert()
      this.router.navigateByUrl('/home');
    }
  }


  // Modals
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Bienvenido.',
      buttons: ['OK']
    });
    await alert.present();
  }

  

}