import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizaExpedicaoPageRoutingModule } from './finaliza-expedicao-routing.module';

import { FinalizaExpedicaoPage } from './finaliza-expedicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizaExpedicaoPageRoutingModule
  ],
  declarations: [FinalizaExpedicaoPage]
})
export class FinalizaExpedicaoPageModule {}
