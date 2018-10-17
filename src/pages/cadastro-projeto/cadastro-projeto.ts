import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { MateriasProvider } from '../../providers/materias/materias';
import { FiltroPage } from '../filtro/filtro';

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
  nomeImagem: string[] = [];
  image64: any[] = [];
  temImagem = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private materias: MateriasProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProjetoPage');
  }

  changeListener(data): void {
    this.readThis(data.target);
    console.log(data);
    
  }
  
  delete(index) {
    let alert = this.alertCtrl.create({
      title: 'Deletar',
      message: 'Tem certeza que deseja deletar?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.image64.splice(index, 1);
            this.nomeImagem.splice(index, 1);
          }
        }
      ]
    });
    alert.present();
  }
  
  readThis(inputValue: any): void {
    let file: File[] = [];
    console.log(inputValue);
    for (let i = 0; i < inputValue.files.length; i++) {
      file.push(inputValue.files[i]);
    }
    console.log(file);
    
    

    file.forEach(element => {
      this.nomeImagem.push(element.name);
    });

    

    file.forEach(element => {
      let myReader: FileReader = new FileReader();
      myReader.readAsDataURL(element);
      
      myReader.onloadend = ((e) => {
        this.image64.push(myReader.result); 
        this.temImagem = true;
      })
    });
    
  }
  
  onSubmit() {
    let post = {
      id: 1,
      nomeUsuario: "humano",
      titulo: this.titulo,
      descricao: this.texto,
      fotos: this.image64
    }
    this.navCtrl.push(FiltroPage, {type: "materia", pai: "cadastro", post: post});
  }
}