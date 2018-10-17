import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/  
@Injectable()
export class UsuarioProvider {

  projetos: {
    idUsuario: number,
    nomeUsuario: string,
    universidadeUsuario: string,
    cursoUsuario: string,
    fotoUsuario: string,
    email:string,
    senha:string
    }
    
    constructor(public storage:Storage) {
   
  }
  
  loga(){
  };

  getUsuário(idUsuario){

  };

  cadastro(obj){
     
  }
}
