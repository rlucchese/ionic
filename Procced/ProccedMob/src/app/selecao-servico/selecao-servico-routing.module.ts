import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecaoServicoPage } from './selecao-servico.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoServicoPageRoutingModule {}
