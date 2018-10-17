import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroProjetoPage } from '../pages/cadastro-projeto/cadastro-projeto';
import { SinglePostPage } from '../pages/single-post/single-post';
import { BuscaPage } from '../pages/busca/busca';
import { PerfilPage } from '../pages/perfil/perfil';
import { SalvosPage } from '../pages/salvos/salvos';
import { FormsModule } from '@angular/forms';
import { FiltroPage } from '../pages/filtro/filtro';
import { MateriasProvider } from '../providers/materias/materias';
import { SelecionarTagsPage } from '../pages/selecionar-tags/selecionar-tags';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CadastroPage,
    LoginPage,
    CadastroProjetoPage,
    SinglePostPage,
    BuscaPage,
    SalvosPage,
    PerfilPage,
    FiltroPage,
    SelecionarTagsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CadastroPage,
    LoginPage,
    CadastroProjetoPage,
    SinglePostPage,
    BuscaPage,
    SalvosPage,
    PerfilPage,
    FiltroPage,
    SelecionarTagsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MateriasProvider
  ]
})
export class AppModule {}
