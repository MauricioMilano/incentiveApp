import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursosProvider {
  private cursos=["ARQUITETURA E URBANISMO","SISTEMAS DE INFORMAÇÃO","ADMINISTRAÇÃO","ENGENHARIA AGRÍCOLA","CIENCIA DA COMPUTAÇÃO"]
  constructor() {
  }
  getCursos(){
    return this.cursos;
  }
}
