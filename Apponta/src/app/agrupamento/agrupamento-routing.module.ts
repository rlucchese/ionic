import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrupamentoPage } from './agrupamento.page';

const routes: Routes = [
  {
    path: '',
    component: AgrupamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrupamentoPageRoutingModule {}
