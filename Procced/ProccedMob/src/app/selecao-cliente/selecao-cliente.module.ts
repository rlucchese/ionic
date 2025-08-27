import { ComponentModule } from './../component/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoClientePageRoutingModule } from './selecao-cliente-routing.module';

import { SelecaoClientePage } from './selecao-cliente.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SelecaoClientePageRoutingModule,
    ComponentModule,
    
  ],
  declarations: []
})
export class SelecaoClientePageModule {}
