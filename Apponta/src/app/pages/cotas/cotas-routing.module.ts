import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotasPage } from './cotas.page';

const routes: Routes = [
  {
    path: '',
    component: CotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotasPageRoutingModule {}
