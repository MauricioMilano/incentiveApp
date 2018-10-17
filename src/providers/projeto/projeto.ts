import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
            materias: string[]
            }

  constructor(public http: HttpClient) {
    console.log('Hello ProjetoProvider Provider');
  }
  setProjeto(data) {
    
  }

  getProjetosMateria(materias: string[]) {
    
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
