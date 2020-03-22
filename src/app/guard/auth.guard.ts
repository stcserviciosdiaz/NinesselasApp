import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { AlertController } from '@ionic/angular';
import { User } from '../shared/user.class';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor ( 
    private authSvc: AuthService,
    public alertController: AlertController, 
    private router: Router ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
    if (this.authSvc.isLogged) {
      this.presentAlert()
      return true;
    }
    console.log('Access denied!');
    this.router.navigateByUrl('/login');
    return false;
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
