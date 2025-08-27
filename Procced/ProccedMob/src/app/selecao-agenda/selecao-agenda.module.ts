import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoAgendaPageRoutingModule } from './selecao-agenda-routing.module';

import { SelecaoAgendaPage } from './selecao-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoAgendaPageRoutingModule
  ],
  declarations: [SelecaoAgendaPage]
})
export class SelecaoAgendaPageModule {}
