import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoItemPageRoutingModule } from './selecao-item-routing.module';
import { SelecaoItemPage } from './selecao-item.page';
import { ComponentModule } from '../componentes/components.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SelecaoItemPageRoutingModule,
    ComponentModule,
    BrowserModule
    
  ],
  declarations: [SelecaoItemPage]
})
export class SelecaoItemPageModule {}
