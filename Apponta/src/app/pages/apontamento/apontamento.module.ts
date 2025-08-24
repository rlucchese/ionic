import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApontamentoPageRoutingModule } from './apontamento-routing.module';

import { ApontamentoPage } from './apontamento.page';
import { ComponentModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApontamentoPageRoutingModule,
    ComponentModule
  ],
  declarations: [ApontamentoPage]
})
export class ApontamentoPageModule {}
