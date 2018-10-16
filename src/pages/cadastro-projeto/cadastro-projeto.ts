import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { MateriasProvider } from '../../providers/materias/materias';

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
  image: any[] = [];
  temImagem = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private materias: MateriasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProjetoPage');
  }

  changeListener(data): void {
    this.readThis(data.target);
    console.log(data);
    
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
        this.image.push(myReader.result); 
        this.temImagem = true;
      })
    });
    
  }
  onSubmit() {
  
  }
}