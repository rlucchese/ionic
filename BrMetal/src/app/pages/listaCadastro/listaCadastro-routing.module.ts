import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { listaCadastroPage } from './listaCadastro.page';

const routes: Routes = [
  {
    path: '',
    component: listaCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class listaCadastroPageRoutingModule {}
