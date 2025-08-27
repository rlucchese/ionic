import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiberacaoColaboradorPage } from './liberacao-colaborador.page';

const routes: Routes = [
  {
    path: '',
    component: LiberacaoColaboradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiberacaoColaboradorPageRoutingModule {}
