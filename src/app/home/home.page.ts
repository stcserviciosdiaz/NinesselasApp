import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'
import { AuthService } from '../Services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    public navCtrl:NavController) {}

  onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login')
  }

  goListFiguration():void{
    this.navCtrl.navigateRoot('ListFigurantePage');
  }

  
}
