import { PedidoPageModule } from './pages/pedido/pedido.module';
import { VisualizaPedidoPage } from './pages/visualiza-pedido/visualiza-pedido.page'
import { DbService } from './storage/db.service';
import { SelecaoClientePage } from './selecao-cliente/selecao-cliente.page';
import {  ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { listaCadastroPage } from './pages/listaCadastro/listaCadastro.page';
import { SelecaoItemPage } from './selecao-item/selecao-item.page';
import { DatePipe, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ModalValidaItensPage } from './modal-valida-itens/modal-valida-itens.page';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [AppComponent, SelecaoClientePage, SelecaoItemPage, VisualizaPedidoPage],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, ScrollingModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        CadastroPage,
        IonicSelectableModule,
        { provide: LOCALE_ID, useValue: 'pt-BR' },
      { provide: LocationStrategy, useClass: HashLocationStrategy },
        listaCadastroPage , SelecaoClientePage , SelecaoItemPage,  DatePipe, VisualizaPedidoPage,PedidoPageModule, ModalValidaItensPage
        //  { provide: LOCALE_ID, useValue: 'pt-BR' },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
