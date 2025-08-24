import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompanhamentoProducaoPageRoutingModule } from './acompanhamento-producao-routing.module';

import { AcompanhamentoProducaoPage } from './acompanhamento-producao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcompanhamentoProducaoPageRoutingModule
  ],
  declarations: [AcompanhamentoProducaoPage]
})
export class AcompanhamentoProducaoPageModule {}
