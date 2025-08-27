import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecaoAgendaPage } from './selecao-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoAgendaPageRoutingModule {}
