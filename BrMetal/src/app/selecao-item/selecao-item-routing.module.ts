import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecaoItemPage } from './selecao-item.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoItemPageRoutingModule {}
