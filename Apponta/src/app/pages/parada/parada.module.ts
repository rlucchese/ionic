import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParadaPageRoutingModule } from './parada-routing.module';

import { ParadaPage } from './parada.page';
import { ComponentModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParadaPageRoutingModule,
    ComponentModule
  ],
  declarations: [ParadaPage]
})
export class ParadaPageModule {}
