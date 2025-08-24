import { ComponentModule } from 'src/app/componentes/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoPedidoPageRoutingModule } from './confirmacao-pedido-routing.module';

import { ConfirmacaoPedidoPage } from './confirmacao-pedido.page';
import { IConfig, NgxMaskPipe } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoPedidoPageRoutingModule,  ComponentModule, ReactiveFormsModule
  ],
  declarations: [ConfirmacaoPedidoPage],
  providers: [
    NgxMaskPipe
  ]
})
export class ConfirmacaoPedidoPageModule {}
