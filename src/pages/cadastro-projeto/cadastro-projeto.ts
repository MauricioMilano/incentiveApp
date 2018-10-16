import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

/**
 * Generated class for the CadastroProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})
export class CadastroProjetoPage {

  titulo: string;
  texto: string;
  colaboradores: string;
  nomeImagem = "default";
  image;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProjetoPage');
  }

  changeListener(data): void {
    this.readThis(data.target);
    console.log(data);
    
  }
  
  readThis(inputValue: any): void {
    let file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    this.nomeImagem = file.name;
    // let myReader: FileReader = new FileReader();
  
     myReader.onloadend = ((e) => {
      this.image = myReader.result; 
     })
     
     myReader.readAsDataURL(file);
     console.log(file);
  }
}
