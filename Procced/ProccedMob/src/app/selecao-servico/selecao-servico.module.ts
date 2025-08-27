import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoServicoPageRoutingModule } from './selecao-servico-routing.module';

import { SelecaoServicoPage } from './selecao-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoServicoPageRoutingModule
  ],
  declarations: [SelecaoServicoPage]
})
export class SelecaoServicoPageModule {}
