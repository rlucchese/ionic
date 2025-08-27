import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaixaPage } from './baixa.page';

const routes: Routes = [
  {
    path: '',
    component: BaixaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaixaPageRoutingModule {}
