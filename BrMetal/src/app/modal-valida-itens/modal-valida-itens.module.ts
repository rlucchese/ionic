import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalValidaItensPageRoutingModule } from './modal-valida-itens-routing.module';

import { ModalValidaItensPage } from './modal-valida-itens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalValidaItensPageRoutingModule
  ],
  declarations: [ModalValidaItensPage]
})
export class ModalValidaItensPageModule {}
