import {NoticiasComponent} from "./noticias/noticias.component";
import {SelecaoComponent} from "./selecao/selecao.component";
import {HideHeaderDirective} from "./../directives/hide-header.directive";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule, Component} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {ListaOrdemServicoComponent} from "./lista-ordem-servico/lista-ordem-servico.component";
import {AtividadeComponent} from "./atividade/atividade.component";
import { SelecaoNotificacaoComponent } from "../selecao-notificacao/selecao-notificacao.component";
import { SelecaoDocumentoComponent } from "../selecao-documento/selecao-documento.component";
import { LogColaboradorPage } from "../log-colaborador/log-colaborador.page";
import { SelecaoClientePage } from "../selecao-cliente/selecao-cliente.page";

@NgModule({
	imports: [IonicModule, CommonModule, FormsModule],
	declarations: [
		ListaOrdemServicoComponent,
		SelecaoComponent,
		NoticiasComponent,
		HideHeaderDirective,
		AtividadeComponent,SelecaoNotificacaoComponent,SelecaoDocumentoComponent, LogColaboradorPage, SelecaoClientePage
	],
	exports: [
		ListaOrdemServicoComponent,
		SelecaoComponent,
		NoticiasComponent,
		HideHeaderDirective,
		AtividadeComponent,SelecaoNotificacaoComponent,SelecaoDocumentoComponent, LogColaboradorPage,SelecaoClientePage

	],
})
export class ComponentModule {}
