import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalValorPageRoutingModule } from './modal-valor-routing.module';

import { ModalValorPage } from './modal-valor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalValorPageRoutingModule
  ],
  declarations: [ModalValorPage]
})
export class ModalValorPageModule {}
