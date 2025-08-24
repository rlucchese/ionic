import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoPage } from './pedido.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoPage,
    children: [
      {
        path: 'identificacaoPedido',
        loadChildren: () => import('../identificacao-pedido/identificacao-pedido.module').then(m => m.IdentificacaoPedidoPageModule)
      },
      {
        path: 'itensPedido',
        loadChildren: () => import('../itens-pedido/itens-pedido.module').then(m => m.ItensPedidoPageModule)
      },
      {
        path: 'confirmacaoPedido',
        loadChildren: () => import('../confirmacao-pedido/confirmacao-pedido.module').then(m => m.ConfirmacaoPedidoPageModule)
      },
      {
        path: '',
        redirectTo: 'identificacaoPedido',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoPageRoutingModule {}
