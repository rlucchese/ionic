import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecaoEventoPage } from './selecao-evento.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoEventoPageRoutingModule {}
