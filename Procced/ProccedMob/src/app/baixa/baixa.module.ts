import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaixaPageRoutingModule } from './baixa-routing.module';

import { BaixaPage } from './baixa.page';
import { ComponentModule } from '../component/components.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaixaPageRoutingModule,ComponentModule,ComponentsModule
  ],
  declarations: [BaixaPage]
})
export class BaixaPageModule {}
