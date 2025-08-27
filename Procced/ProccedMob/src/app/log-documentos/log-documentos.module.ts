import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogDocumentosPageRoutingModule } from './log-documentos-routing.module';

import { LogDocumentosPage } from './log-documentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogDocumentosPageRoutingModule
  ],
  declarations: [LogDocumentosPage]
})
export class LogDocumentosPageModule {}
