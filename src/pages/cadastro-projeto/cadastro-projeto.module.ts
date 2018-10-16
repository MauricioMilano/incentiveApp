import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroProjetoPage } from './cadastro-projeto';

@NgModule({
  declarations: [
    CadastroProjetoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroProjetoPage),
  ],
})
export class CadastroProjetoPageModule {}
