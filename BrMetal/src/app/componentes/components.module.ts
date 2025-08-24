import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ListaObjetoGridComponent } from './lista-objeto-grid/lista-objeto-grid.component';
import { GrapeItemComponent } from './grape-item/grape-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { Relation1to1Component } from './relation1to1/relation1to1.component';
import { GrapeTreeComponent } from './grape-header/grape-header.component';
import { GrapeGridComponent } from './grape-grid/grape-grid.component';
import {  ScrollingModule } from '@angular/cdk/scrolling';
 
@NgModule({
    imports:[IonicModule, CommonModule, FormsModule, ScrollingModule],
    declarations: 
    [
HeaderComponent,Relation1to1Component,  GrapeTreeComponent, GrapeItemComponent, GrapeGridComponent, ListaObjetoGridComponent, FilterBarComponent
    ],
    exports:[
HeaderComponent, Relation1to1Component,  GrapeTreeComponent, GrapeItemComponent, GrapeGridComponent,ListaObjetoGridComponent, FilterBarComponent,ScrollingModule
    ]
})
export class ComponentModule {}