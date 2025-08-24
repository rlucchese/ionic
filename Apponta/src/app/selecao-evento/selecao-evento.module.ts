import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoEventoPageRoutingModule } from './selecao-evento-routing.module';

import { SelecaoEventoPage } from './selecao-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoEventoPageRoutingModule
  ],
  declarations: [SelecaoEventoPage]
})
export class SelecaoEventoPageModule {}
