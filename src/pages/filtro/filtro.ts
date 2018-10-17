import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasProvider } from '../../providers/materias/materias';

/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html',
})
export class FiltroPage {
  matematica;
  fisica;
  filosofia;
  quimica;
  public type;
  constructor(public navCtrl: NavController, public navParams: NavParams, private materias: MateriasProvider) {
    this.type = this.navParams.get("type");
    console.log(this.type);
    console.log(materias);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltroPage');
  }

}
