import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcompanhamentoProducaoPage } from './acompanhamento-producao.page';

const routes: Routes = [
  {
    path: '',
    component: AcompanhamentoProducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhamentoProducaoPageRoutingModule {}
