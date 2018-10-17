import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { SinglePostPage } from '../../pages/single-post/single-post';

/*
  Generated class for the ProjetoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjetoProvider {
  projetos: {
            idUsuario: number,
            nomeUsuario: string,
            universidadeUsuario: string,
            cursoUsuario: string,
            fotoUsuario: string,
            titulo: string,
            descricao: string,
            fotos: string[],
            materias: string[],
            comentarios: string[]
            }[] = [];
public todosProjetos = [];
  constructor(private storage: Storage) {
    console.log('Hello ProjetoProvider Provider');
  }
  setProjeto(data) {
    this.projetos.push(data);
    console.log(this.projetos[0]);
    let key;
    this.storage.length().then(resp=>{
      key = resp+1;
      
    console.log(key.toString());
    this.storage.set(key,data)
    });
    
  }

  setComentario(data) {

  }
  public getProjetos(){
    let projetos =[]
 
    var promise = new Promise((resolve, reject) => {
      this.storage.forEach(resp=>{
        projetos.push(resp);
      }).then(()=>{
        this.todosProjetos = projetos.reverse();
        console.log(projetos)
        resolve(projetos)
      })
    });
    return promise;
  }
  getProjetosMateria(materias: string[]) {
    let cont = 0;
    let total = this.getProjetos.length; 
    this.getProjetos().then(()=>{
      this.todosProjetos.forEach(resp=>{
        if(resp.materias!=materias){
          let index = this.todosProjetos.indexOf(resp);
          if (index< 0 ){
            this.todosProjetos.splice(index,1);
          }
        }
        cont ++;
        if(cont==total){
          return this.todosProjetos; 
        }
      })

    })

  }
  getProjetosUniversidade(univ: string) {
    // TODO
  }
  getProjetosCursos(curso: string) {
    // TODO
  }
  getProjetosPessoa(nome: string) {
    // TODO
  }

}
