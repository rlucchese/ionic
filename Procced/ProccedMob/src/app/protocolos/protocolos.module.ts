import { ComponentModule } from './../component/components.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProtocolosPage } from './protocolos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProtocolosPageRoutingModule } from './protocolos-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ProtocolosPage }]),
    ProtocolosPageRoutingModule,
    ComponentModule
  ],
  declarations: [ProtocolosPage ]
})
export class ProtocolosPageModule {}
