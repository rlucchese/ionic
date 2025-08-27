import { OpcaoFiltro } from './../interfaces/ordem-servico';
import { AppComponent } from './../app.component';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-solicitacoes",
  templateUrl: "solicitacoes.page.html",
  styleUrls: ["solicitacoes.page.scss"],
})
export class SolicitacoesPage {
    public rotuloSingular: String ="Solicitação" 
    public rotuloPlural: String="Solicitações" 
    public idTipoMob: number=4
    public opcoesFiltro: OpcaoFiltro[] = [{
      id: 1,
      rotulo: 'Não Baixadas'
    },{
      id: 2,
      rotulo: 'Baixadas'
    },{
      id: 3,
      rotulo: 'Todos'
    }];
   
    constructor(public app: AppComponent) {}
  
    ionViewWillEnter() {
      this.app.setSelectedIndex(this.rotuloPlural)
    }
  }
