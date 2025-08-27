import { LogDocumentosPage } from './log-documentos/log-documentos.page';
import { DocumentosColaboradorPage } from './documentos-colaborador/documentos-colaborador.page';
import { SelecaoServicoPage } from './selecao-servico/selecao-servico.page';
import { IncluiOrdemServicoPage } from './inclui-ordem-servico/inclui-ordem-servico.page';
import { SelecaoDocumentoComponent } from './selecao-documento/selecao-documento.component';
import { SelecaoClientePage } from './selecao-cliente/selecao-cliente.page';
//import { HTTP } from '@ionic-native/http/ngx';
import { WsProccedService } from './api/ws-procced.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SelecaoNotificacaoComponent } from './selecao-notificacao/selecao-notificacao.component';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SolicitacoesPage } from './solicitacoes/solicitacoes.page';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ComponentModule } from './component/components.module';
import { SenhaColaboradorPage } from './senha-colaborador/senha-colaborador.page';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { LogColaboradorPage } from './log-colaborador/log-colaborador.page';
import { SelecaoAgendaPage } from './selecao-agenda/selecao-agenda.page';
import { InfoBaixasPage } from './info-baixas/info-baixas.page';

@NgModule({
  declarations: [AppComponent],
  imports: [IonicModule.forRoot(), 
    FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule, HttpClientModule,ComponentModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
AngularFireDatabaseModule
    ],

  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
   WsProccedService, 
    SelecaoClientePage,
    DocumentosColaboradorPage,
    SelecaoServicoPage,
    SelecaoDocumentoComponent,
    SelecaoNotificacaoComponent,
    IncluiOrdemServicoPage,
    FileOpener,
    SolicitacoesPage,
    LogColaboradorPage,
    LogDocumentosPage,
    FormBuilder, FormsModule, SenhaColaboradorPage, AppVersion,InAppBrowser,SelecaoAgendaPage,InfoBaixasPage,  { provide: LocationStrategy, useClass: HashLocationStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
