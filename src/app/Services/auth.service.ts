import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class'
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ErrorModalComponent } from '../error-modal/error-modal.component'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    public isLogged: any = false;

    constructor(
      public afAuth: AngularFireAuth,
      public ngxSmartModalService: NgxSmartModalService) {
      afAuth.authState.subscribe( user => (this.isLogged = user));
    }

    // login
    async onLogin (user: User){
      try{
        return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      } catch (error){
        console.log('error on login', error);
      }
    }

    // register
    async onRegister (user: User) {
      try{
        return await this.afAuth.auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );

      } catch (error) {
        console.log('Error on register user', error);
      }
    }
 
}