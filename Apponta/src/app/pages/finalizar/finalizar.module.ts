import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarPageRoutingModule } from './finalizar-routing.module';

import { FinalizarPage } from './finalizar.page';
import { ComponentModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarPageRoutingModule,
    ComponentModule,
  ],
  declarations: [FinalizarPage]
})
export class FinalizarPageModule {}
