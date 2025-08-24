import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacaoPageRoutingModule } from './operacao-routing.module';

import { OperacaoPage } from './operacao.page';
import { ComponentModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperacaoPageRoutingModule,
    ComponentModule
  ],
  declarations: [OperacaoPage]
})
export class OperacaoPageModule {}
