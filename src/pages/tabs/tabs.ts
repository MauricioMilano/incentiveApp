import { Component } from '@angular/core';
import { SalvosPage } from '../salvos/salvos';
import { BuscaPage } from '../busca/busca';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BuscaPage;
  tab2Root = SalvosPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
