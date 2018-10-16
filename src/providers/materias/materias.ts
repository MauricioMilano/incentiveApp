import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MateriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriasProvider {
  public matematica = ["Funções de 1° e 2° graus","Progressão aritmética e geométrica","Estatística","Grandezas proporcionais","Porcentagem","Trigonometria","Análise combinatória e probabilidade"];
  public fisica = ["Mecânica","Eletricidade e Energia","Ondulatória","Termodinâmica","Óptica"];
  public filosofia = ["Filosofia Temática","Filosofia Moderna","Filosofia Antiga","Filosofia Contemporânea"]
  public quimica = ["Filosofia Contemporânea","Termoquímica","Neutralidade","Oxidação","Equilíbrios químicos","pH","Funções orgânicas" ]
  constructor() {
    console.log('Hello MateriasProvider Provider');
  }
  getMatematica(){
    return this.matematica;
  }
}
