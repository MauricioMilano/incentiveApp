import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SinglePostPage } from '../single-post/single-post';
import { ProjetoProvider } from '../../providers/projeto/projeto';

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
  public post=[{
    nomeProj:"trabalho robotica",
    usuario:"Mauricio",
    fotoUsuario:"assets/imgs/aluno.jpg",
    descricao:"foi um trabalho muito importante, com muita utilização de fisica, quimica e etc...",
    foto:"assets/imgs/rob.jpg",
    materiasIncluidas :["Progressão aritmética e geométrica", "Grandezas proporcionais", "Análise combinatória e probabilidade", "Trigonometria"]
  }]
  public posts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public projetos:ProjetoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
     this.projetos.getProjetos().then(resp=>{
       console.log(resp)
      this.posts = resp;
    });
    console.log(this.posts)
  }
  goToSinglePage(obj){
    console.log("saiu:",obj);;
    this.navCtrl.push(SinglePostPage,{'post':obj})
  }
}
