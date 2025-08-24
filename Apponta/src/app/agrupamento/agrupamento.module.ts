import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrupamentoPageRoutingModule } from './agrupamento-routing.module';

import { AgrupamentoPage } from './agrupamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrupamentoPageRoutingModule
  ],
  declarations: []
})
export class AgrupamentoPageModule {}
