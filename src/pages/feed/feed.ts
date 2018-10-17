import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SinglePostPage } from '../single-post/single-post';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public posts=[{
    nomeProj:"trabalho robotica",
    usuario:"Mauricio",
    fotoUsuario:"assets/imgs/aluno.jpg",
    descricao:"foi um trabalho muito importante, com muita utilização de fisica, quimica e etc...",
    foto:"assets/imgs/rob.jpg",
    materiasIncluidas :["Progressão aritmética e geométrica", "Grandezas proporcionais", "Análise combinatória e probabilidade", "Trigonometria"]
  }]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }
  goToSinglePage(obj){
    console.log("saiu:",obj);;
    this.navCtrl.push(SinglePostPage,{'post':obj})
  }
}
