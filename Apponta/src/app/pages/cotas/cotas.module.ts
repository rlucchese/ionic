import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CotasPage } from './cotas.page';
import { CotasPageRoutingModule } from './cotas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     CotasPageRoutingModule
  ],
  declarations: [CotasPage]
})
export class CotasPageModule {}
