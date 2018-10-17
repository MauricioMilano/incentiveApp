import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UniversidadesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UniversidadesProvider {
  public nomes = {
      rio:["PUC-RJ- Pontifícia Universidade Católica do Rio de Janeiro", 
        "UCB - Universidade Castelo Branco",
        "UCP - Universidade Católica de Petrópolis",
        "UERJ - Universidade do Estado do Rio de Janeiro",
        "UFF - Universidade Estadual do Norte Fluminense",
        "UFF - Universidade Federal Fluminense",
        "UFRJ - Universidade Federal do Rio de Janeiro",
        "UFRRJ - Universidade Federal Rural do Rio de Janeiro",
        "UGF - Universidade Gama Filho",
        "UNESA - Universidade Estácio de Sá",
        'UNIGRANRIO - Universidade do Grande Rio',
        'UNIG - Universidade de Nova Iguaçu',
        'UNIRIO - Universidade do Rio de Janeiro',
        'UNIVERSO - Universidade Salgado de Oliveira',
        'USU - Universidade Santa Úrsula',
        'UVA - Universidade Veiga de Almeida']
  }
  constructor() {
  }
  getUniversidades(){
    return this.nomes;
  }
}
