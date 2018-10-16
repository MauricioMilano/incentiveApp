import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
