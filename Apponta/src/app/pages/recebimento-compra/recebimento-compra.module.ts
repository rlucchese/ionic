import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecebimentoCompraPageRoutingModule } from './recebimento-compra-routing.module';

import { RecebimentoCompraPage } from './recebimento-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecebimentoCompraPageRoutingModule
  ],
  declarations: [RecebimentoCompraPage]
})
export class RecebimentoCompraPageModule {}
