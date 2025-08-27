import { Mask } from './../directives/ion-input-directive.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncluiOrdemServicoPageRoutingModule } from './inclui-ordem-servico-routing.module';

import { IncluiOrdemServicoPage } from './inclui-ordem-servico.page';
import { IonicSelectableComponent } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IncluiOrdemServicoPageRoutingModule,
    IonicSelectableComponent,
    
    
  ],
  declarations: [IncluiOrdemServicoPage, Mask]
})
export class IncluiOrdemServicoPageModule {}
