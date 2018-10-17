import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
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
import { UniversidadesProvider } from '../providers/universidades/universidades';
import { CursosProvider } from '../providers/cursos/cursos';
import { FeedPage } from '../pages/feed/feed';
import { ProjetoProvider } from '../providers/projeto/projeto';
import { RequestProvider } from '../providers/request/request';

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
    FeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpModule
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
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MateriasProvider,
    UniversidadesProvider,
    CursosProvider,
    ProjetoProvider,
    RequestProvider
  ]
})
export class AppModule {}
