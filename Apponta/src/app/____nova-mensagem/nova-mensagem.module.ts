import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaMensagemPageRoutingModule } from './nova-mensagem-routing.module';

import { NovaMensagemPage } from './nova-mensagem.page';
import {  IonicSelectableModule } from ' /ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaMensagemPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [NovaMensagemPage]
})
export class NovaMensagemPageModule {}
