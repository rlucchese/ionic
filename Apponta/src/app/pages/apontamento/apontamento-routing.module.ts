import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApontamentoPage } from './apontamento.page';

const routes: Routes = [
  {
    path: '',
    component: ApontamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApontamentoPageRoutingModule {}
