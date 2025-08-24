import { AgrupamentoPage } from './agrupamento/agrupamento.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalizarPage } from './pages/finalizar/finalizar.page';
import { OperacaoPage } from './pages/operacao/operacao.page';
import { ParadaPage } from './pages/parada/parada.page';
import { SelecaoEventoPage } from './selecao-evento/selecao-evento.page';
import { EquipamentoPage } from './pages/equipamento/equipamento.page';
import { PlantaPage } from './pages/planta/planta.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { NovaMensagemPage } from './nova-mensagem/nova-mensagem.page';
import { OperadorPage } from './operador/operador.page';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SelecaoNotaComponent } from './componentes/selecao-nota/selecao-nota.component';
import { SelecaoPedidoComponent } from './componentes/selecao-pedido/selecao-pedido.component';
import { SelecaoProdutoComponent } from './componentes/selecao-produto/selecao-produto.component';
import { ProdutosPage } from './pages/produtos/produtos.page';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, PlantaPage, EquipamentoPage,OperadorPage,SelecaoEventoPage, ParadaPage, OperacaoPage, FinalizarPage, AgrupamentoPage, ProdutosPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt' },
    PlantaPage, 
    EquipamentoPage,
    OperadorPage,
    SelecaoEventoPage,
    ParadaPage,
    OperacaoPage,
    FinalizarPage,
    AgrupamentoPage,
    NovaMensagemPage, 
     FileOpener, SelecaoNotaComponent, SelecaoPedidoComponent, SelecaoProdutoComponent, ProdutosPage
],
  bootstrap: [AppComponent],
})
export class AppModule {}
