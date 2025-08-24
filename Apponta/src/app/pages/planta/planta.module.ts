import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantaPageRoutingModule } from './planta-routing.module';

import { PlantaPage } from './planta.page';
import { ComponentModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantaPageRoutingModule,
    ComponentModule

  ]
})
export class PlantaPageModule {}
