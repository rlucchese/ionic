import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoClientePageRoutingModule } from './selecao-cliente-routing.module';
import { SelecaoClientePage } from './selecao-cliente.page';
import { ComponentModule } from '../componentes/components.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SelecaoClientePageRoutingModule,
    ComponentModule,
    BrowserModule
    
  ],
  declarations: [SelecaoClientePage]
})
export class SelecaoClientePageModule {}
