import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncluiOrdemServicoPage } from './inclui-ordem-servico.page';

const routes: Routes = [
  {
    path: '',
    component: IncluiOrdemServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncluiOrdemServicoPageRoutingModule {}
