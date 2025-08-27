import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiberacaoColaboradorPageRoutingModule } from './liberacao-colaborador-routing.module';

import { LiberacaoColaboradorPage } from './liberacao-colaborador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiberacaoColaboradorPageRoutingModule,
  ],
  declarations: [LiberacaoColaboradorPage]
})
export class LiberacaoColaboradorPageModule {}
