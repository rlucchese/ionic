import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentosColaboradorPage } from './documentos-colaborador.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentosColaboradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentosColaboradorPageRoutingModule {}
