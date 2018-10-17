import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionarTagsPage } from './selecionar-tags';

@NgModule({
  declarations: [
    SelecionarTagsPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecionarTagsPage),
  ],
})
export class SelecionarTagsPageModule {}
