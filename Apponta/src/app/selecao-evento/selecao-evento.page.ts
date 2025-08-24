import { EventoProducao } from './../interface/reval';
import { ProducaoService } from 'src/app/api/producao.service';
import { DbService } from 'src/app/storage/db.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selecao-evento',
  templateUrl: './selecao-evento.page.html',
  styleUrls: ['./selecao-evento.page.scss'],
})
export class SelecaoEventoPage implements OnInit {
  @Input() idRecurso: number
  @Input() idAgrupador: number

  public eventos: EventoProducao[]
  public eventosIni: EventoProducao[]

  constructor(public db: DbService,
    public prdSvc: ProducaoService,
    public mc:ModalController) { }

  ngOnInit() {
    this.carrega();
  }

  carrega() {
    if (this.db.autenticado()) {
      this.db.mostraProcessando();
      this.prdSvc.GetEventosProducao({token: this.db.token,
        idAgrupador: this.idAgrupador,
        idRecurso: this.idRecurso})
        .subscribe(
          (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              this.eventosIni = ret.eventosProducao
              this.eventos = ret.eventosProducao
              console.log(this.eventos)
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }

  busca(evt: any) {
    this.eventos = this.eventosIni.filter((ev) => {
      return this.db.compara([ev.descricao,ev.id], evt.detail.value);
    });
  }

  async selecionaEvento(idRecurso:number, idAgrupador:number) {
    const modal = await this.mc.create({
      component: SelecaoEventoPage,
      componentProps: { idRecurso: idRecurso,
                        idAgrupador: idAgrupador,
                      },
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  seleciona(evt: EventoProducao) {
    this.mc.dismiss({
      status: true,
      evento: evt,
    });
  }
}
