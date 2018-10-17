import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MateriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriasProvider {
  public materias ={
   "matematica":["Funções de 1° e 2° graus","Progressão aritmética e geométrica","Estatística","Grandezas proporcionais","Porcentagem","Trigonometria","Análise combinatória e probabilidade"],
   "fisica":["Mecânica","Eletricidade e Energia","Ondulatória","Termodinâmica","Óptica"],
   "filosofia":["Filosofia Temática","Filosofia Moderna","Filosofia Antiga","Filosofia Contemporânea"],
   "quimica":["Filosofia Contemporânea","Termoquímica","Neutralidade","Oxidação","Equilíbrios químicos","pH","Funções orgânicas" ]
  }
   constructor() {
    console.log('Hello MateriasProvider Provider');
  }
  getMaterias(){
    // return new Promise((resolve, reject) => {
    //   resolve(this.materias);
    // })
    return this.materias; 
  }
}
