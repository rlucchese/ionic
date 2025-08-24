import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizaPedidoPageRoutingModule } from './visualiza-pedido-routing.module';

import { VisualizaPedidoPage } from './visualiza-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizaPedidoPageRoutingModule
  ],
  declarations: [VisualizaPedidoPage]
})
export class VisualizaPedidoPageModule {}
