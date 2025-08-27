import { OpcaoFiltro } from './../interfaces/ordem-servico';
import { AppComponent } from './../app.component';
import { Component } from "@angular/core";

@Component({
  selector: "app-protocolos",
  templateUrl: "protocolos.page.html",
  styleUrls: ["protocolos.page.scss"],
})
export class ProtocolosPage { 
  public rotuloSingular: String ="Protocolo" 
  public rotuloPlural: String="Protocolos" 
  public idTipoMob: number=3
  public opcoesFiltro: OpcaoFiltro[] = [{
    id: 1,
    rotulo: 'Últimos 30 dias'
  },{
    id: 3,
    rotulo: 'Todos'
  }];

  constructor(public app: AppComponent) {}

  ionViewWillEnter() {
    this.app.setSelectedIndex(this.rotuloPlural)
  }
}
