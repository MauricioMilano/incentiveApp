import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the SinglePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-post',
  templateUrl: 'single-post.html',
})
export class SinglePostPage {
  public comentarios = [];
  public comentario;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePostPage');
  }
  entraPerfil(){
    this.navCtrl.setRoot(PerfilPage);
  }
  enviaComentario(){
    let obj={
      nome:"Humano",
      comentario:this.comentario
    }
    this.comentarios.push(obj);
    this.comentario = "";
  }
}
