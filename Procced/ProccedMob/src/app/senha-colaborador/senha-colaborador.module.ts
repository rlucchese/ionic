import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaColaboradorPageRoutingModule } from './senha-colaborador-routing.module';

import { SenhaColaboradorPage } from './senha-colaborador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhaColaboradorPageRoutingModule
  ],
  declarations: [SenhaColaboradorPage]
})
export class SenhaColaboradorPageModule {}
