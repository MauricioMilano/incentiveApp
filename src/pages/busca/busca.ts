import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FiltroPage } from '../filtro/filtro';

/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaPage');
  }
  materia() {
    this.navCtrl.push(FiltroPage,{type:"materia"});
  }
  universidade(){
    this.navCtrl.push(FiltroPage,{type:"universidade"});
  }
  cursos
  (){
    this.navCtrl.push(FiltroPage,{type:"curso"});
  }  
  pessoas(){
    this.navCtrl.push(FiltroPage,{type:"pessoas"});
  }
}
