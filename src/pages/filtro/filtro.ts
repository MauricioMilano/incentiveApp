import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasProvider } from '../../providers/materias/materias';
import { UniversidadesProvider} from "../../providers/universidades/universidades";
import { CursosProvider } from '../../providers/cursos/cursos';
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
  public pai:string;
  public disciplinas:any;
  public instituicoes:any;
  public cursoNames:any;
  public type;
  public objfinal= [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private cursos:CursosProvider, private materias:MateriasProvider, public universidades:UniversidadesProvider) {
    this.type = this.navParams.get("type");
    this.pai = this.navParams.get("pai") || null;
  }
  ionViewDidLoad() {
    this.disciplinas = this.materias.getMaterias();
    this.instituicoes = this.universidades.getUniversidades();
    this.cursoNames = this.cursos.getCursos();
    console.log(this.cursoNames);
  }
  
  atualizaObjeto(objeto){
    let index = this.objfinal.indexOf(objeto);
    if (index>-1){
      this.objfinal.splice(index,1);
    }else{
      this.objfinal.push(objeto);
    }
  
  }

}
