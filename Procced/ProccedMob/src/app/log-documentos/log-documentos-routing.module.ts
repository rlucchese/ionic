import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogDocumentosPage } from './log-documentos.page';

const routes: Routes = [
  {
    path: '',
    component: LogDocumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogDocumentosPageRoutingModule {}
