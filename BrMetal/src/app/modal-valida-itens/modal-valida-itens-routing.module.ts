import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalValidaItensPage } from './modal-valida-itens.page';

const routes: Routes = [
  {
    path: '',
    component: ModalValidaItensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalValidaItensPageRoutingModule {}
