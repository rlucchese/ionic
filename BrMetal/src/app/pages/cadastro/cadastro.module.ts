import { listaCadastroPageRoutingModule } from './../listaCadastro/listaCadastro-routing.module';
import { ListaCadastroPageModule } from './../listaCadastro/listaCadastro.module';
import { listaCadastroPage } from './../listaCadastro/listaCadastro.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { ComponentModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    IonicSelectableModule, ComponentModule, listaCadastroPageRoutingModule
  ],
  declarations: [CadastroPage],
  providers: [NavParams]
})
export class CadastroPageModule {}
