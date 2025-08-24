import { SelecaoEventoPage } from "./../../selecao-evento/selecao-evento.page";
import { EventoProducao } from "./../../interface/reval";
import { ProducaoService } from "src/app/api/producao.service";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController } from "@ionic/angular";
import { DbService } from "src/app/storage/db.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-parada",
  templateUrl: "./parada.page.html",
  styleUrls: ["./parada.page.scss"],
})
export class ParadaPage implements OnInit {
  @Input() idAgrupador: number;
  @Input() idRecurso: number;
  @Input() operacoes: number[] = []
  @Input() idAgrupamento: number

  public evento: EventoProducao;

  public motivo: number;
  public complemento: string = "";

  constructor(
    public db: DbService,
    public alertController: AlertController,
    public router: Router,
    public prdSvc: ProducaoService,
    public mc: ModalController,
    public selecEv: SelecaoEventoPage
  ) {}

  ngOnInit() {}

  async parada() {

    if (!this.evento || (this.evento.complementoObrigatorio && (!this.complemento || this.complemento ==""))){
      this.db.setMensagem("Obrigatório selecionar motivo e informar complemento");
      return false
    } 
    else {
      this.db.registraEvento(this.idRecurso, this.evento.id, this.complemento,this.operacoes, this.idAgrupamento).subscribe(
        (ret) => {
          this.db.escondeProcessando();
          if (ret.status) {
            this.close(true)
            this.db.escondeProcessando();
          }
        },
        (err) => this.db.escondeProcessando(err.error)
      );
    }
  }

  async selecionaParada(idRecurso: number, idAgrupador:number, operacoes: number[], idAgrupamento: number) {
    const modal = await this.mc.create({
      component: ParadaPage,
      componentProps: { idRecurso: idRecurso, 
                        idAgrupador: idAgrupador,
                        operacoes: operacoes,
                        idAgrupamento: idAgrupamento
                      },
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  close(status: boolean = false) {
    this.mc.dismiss({
      status: status,
    });
  }

  async selecionaEvento() {
    const ret = await this.selecEv.selecionaEvento(
      this.idRecurso,
      this.idAgrupador
    );
    if (ret.data.status) {
      this.evento = ret.data.evento;
    }
  }
}
