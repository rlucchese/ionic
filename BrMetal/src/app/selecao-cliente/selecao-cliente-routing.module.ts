import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecaoClientePage } from './selecao-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoClientePageRoutingModule {}
