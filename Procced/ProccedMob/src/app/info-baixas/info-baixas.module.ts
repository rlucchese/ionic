import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoBaixasPageRoutingModule } from './info-baixas-routing.module';

import { InfoBaixasPage } from './info-baixas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoBaixasPageRoutingModule
  ],
  declarations: [InfoBaixasPage]
})
export class InfoBaixasPageModule {}
