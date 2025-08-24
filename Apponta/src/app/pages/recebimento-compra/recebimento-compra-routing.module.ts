import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecebimentoCompraPage } from './recebimento-compra.page';

const routes: Routes = [
  {
    path: '',
    component: RecebimentoCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecebimentoCompraPageRoutingModule {}
