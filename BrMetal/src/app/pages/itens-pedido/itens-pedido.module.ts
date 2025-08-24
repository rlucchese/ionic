import { ModalValorPage } from './../../modal-valor/modal-valor.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensPedidoPageRoutingModule } from './itens-pedido-routing.module';

import { ItensPedidoPage } from './itens-pedido.page';
import { NgxMaskPipe } from 'ngx-mask';
import { ModalValidaItensPage } from 'src/app/modal-valida-itens/modal-valida-itens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensPedidoPageRoutingModule,    
  ],
  declarations: [ItensPedidoPage],
  providers:[NgxMaskPipe , ModalValorPage, ModalValidaItensPage]
})
export class ItensPedidoPageModule {}
