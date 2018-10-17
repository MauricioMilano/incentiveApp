import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { SinglePostPage } from '../../pages/single-post/single-post';
import { RequestProvider } from '../request/request';

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
public todosProjetos:any = [];
  constructor(private storage: Storage, public request:RequestProvider) {
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
  setProjetoDb(data){
    this.request.postProjects(data);
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
  let novo = [];
  var promise = new Promise ((resolve, reject)=>{
    this.getProjetos().then(()=>{
      this.todosProjetos.forEach(element => {
        if(this.verifica(materias,element)){
          novo.push(element);
        }

      });
    }).then(()=>{
      resolve(novo);
    })
  })
  return promise;
}
  verifica(materias,projeto){
    let cont = 0; 
    materias.forEach(element => {
     let index = projeto.materias.indexOf(element);
     if(index>=0){
       return false
     }
     cont++;
     if(cont==materias.length){
       return true;
     }
    })
    return true;
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
