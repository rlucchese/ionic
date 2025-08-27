import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBaixasPage } from './info-baixas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBaixasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBaixasPageRoutingModule {}
