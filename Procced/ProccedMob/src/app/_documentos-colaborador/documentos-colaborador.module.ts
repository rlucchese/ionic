import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentosColaboradorPageRoutingModule } from './documentos-colaborador-routing.module';

import { DocumentosColaboradorPage } from './documentos-colaborador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentosColaboradorPageRoutingModule
  ],
//  declarations: [DocumentosColaboradorPage]
})
export class DocumentosColaboradorPageModule {}
