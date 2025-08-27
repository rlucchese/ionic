import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaColaboradorPage } from './senha-colaborador.page';

const routes: Routes = [
  {
    path: '',
    component: SenhaColaboradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhaColaboradorPageRoutingModule {}
