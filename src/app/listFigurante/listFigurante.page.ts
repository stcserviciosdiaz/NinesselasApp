import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listFigurante',
  templateUrl: 'listFigurante.page.html',
  styleUrls: ['listFigurante.page.scss']
})
export class ListFigurantePage {

  constructor(public navCtrl:NavController) {}

  goBack():void{
    this.navCtrl.pop()
  }

}
