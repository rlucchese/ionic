import { ComponentModule } from './../component/components.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolicitacoesPage } from './solicitacoes.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SolicitacoesPageRoutingModule } from './solicitacoes-routing.module';
import { HideHeaderDirective } from '../directives/hide-header.directive';
 
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SolicitacoesPageRoutingModule,
    ComponentModule
  ],
  declarations: [SolicitacoesPage]
})
export class SolicitacoesPageModule {}
