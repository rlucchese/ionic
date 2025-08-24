import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalValorPage } from './modal-valor.page';

const routes: Routes = [
  {
    path: '',
    component: ModalValorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalValorPageRoutingModule {}
