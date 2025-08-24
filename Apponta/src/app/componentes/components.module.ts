import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { SelecaoNotaComponent } from './selecao-nota/selecao-nota.component';
import { SelecaoPedidoComponent } from './selecao-pedido/selecao-pedido.component';
import { SelecaoProdutoComponent } from './selecao-produto/selecao-produto.component';
 
@NgModule({
    imports:[IonicModule, CommonModule, FormsModule, ],
    declarations: [
HeaderComponent,
SelecaoNotaComponent, SelecaoPedidoComponent, SelecaoProdutoComponent
    ],
    exports:[
HeaderComponent,
SelecaoNotaComponent,
SelecaoPedidoComponent, SelecaoProdutoComponent
    ]
})
export class ComponentModule {}