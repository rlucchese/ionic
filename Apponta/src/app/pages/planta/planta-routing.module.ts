import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantaPage } from './planta.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantaPageRoutingModule {}
