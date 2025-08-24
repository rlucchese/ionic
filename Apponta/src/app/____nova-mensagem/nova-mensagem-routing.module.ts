import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaMensagemPage } from './nova-mensagem.page';

const routes: Routes = [
  {
    path: '',
    component: NovaMensagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaMensagemPageRoutingModule {}
