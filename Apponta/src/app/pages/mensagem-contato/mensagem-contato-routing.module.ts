import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensagemContatoPage } from './mensagem-contato.page';

const routes: Routes = [
  {
    path: '',
    component: MensagemContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensagemContatoPageRoutingModule {}
