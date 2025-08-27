import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentosPage } from './documentos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DocumentosPageRoutingModule } from './documentos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DocumentosPageRoutingModule
      ],
    
  declarations: [DocumentosPage]
}) 
export class DocumentosPageModule {}
