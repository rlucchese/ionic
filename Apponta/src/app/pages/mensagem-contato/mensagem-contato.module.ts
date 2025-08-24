import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensagemContatoPageRoutingModule } from './mensagem-contato-routing.module';

import { MensagemContatoPage } from './mensagem-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensagemContatoPageRoutingModule
  ],
  declarations: [MensagemContatoPage]
})
export class MensagemContatoPageModule {}
