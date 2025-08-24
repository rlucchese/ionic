import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl, NgForm, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentificacaoPedidoPageRoutingModule } from './identificacao-pedido-routing.module';

import { IdentificacaoPedidoPage } from './identificacao-pedido.page';

import { NgxMaskPipe } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentificacaoPedidoPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [IdentificacaoPedidoPage],
  providers:[NgxMaskPipe, FormsModule]
})
export class IdentificacaoPedidoPageModule {}
