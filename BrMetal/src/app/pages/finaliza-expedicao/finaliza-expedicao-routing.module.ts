import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizaExpedicaoPage } from './finaliza-expedicao.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizaExpedicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizaExpedicaoPageRoutingModule {}
