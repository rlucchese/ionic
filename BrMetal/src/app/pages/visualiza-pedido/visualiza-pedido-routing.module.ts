import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizaPedidoPage } from './visualiza-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizaPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizaPedidoPageRoutingModule {}
