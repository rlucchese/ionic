import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';


import { listaCadastroPageRoutingModule } from './listaCadastro-routing.module';
import { listaCadastroPage } from './listaCadastro.page';
import { ComponentModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    listaCadastroPageRoutingModule, ComponentModule
  ],
  declarations: [listaCadastroPage],
  providers: [NavParams]
})
export class ListaCadastroPageModule {}
