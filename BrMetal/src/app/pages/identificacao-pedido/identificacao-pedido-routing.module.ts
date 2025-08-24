import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentificacaoPedidoPage } from './identificacao-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: IdentificacaoPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentificacaoPedidoPageRoutingModule {}
