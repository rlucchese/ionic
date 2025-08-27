import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-selecao-agenda',
  templateUrl: './selecao-agenda.page.html',
  styleUrls: ['./selecao-agenda.page.scss'],
})
export class SelecaoAgendaPage implements OnInit {
  public idTipoMob: number
  public agendas: any
//  public servicosDB: Servico[]

  constructor(
    public db: DbService,
    private usuSvc: UsuarioService,
    public mc: ModalController
  ) {
  }

  ngOnInit() {
    this.carrega();
  }

  async selecionaAgenda() {
    const modal = await this.mc.create({
      component: SelecaoAgendaPage,
      componentProps: {} ,
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  carrega() {
    if (this.db.autenticado()) {
//      if (!this.db.clientes || forcaCarga) {
        this.db.mostraProcessando();
        this.usuSvc
    .GetRecurso({
      token: this.db.app.token,
    })
    .subscribe(
      (ret) => {
        if (ret.status) {
          console.log(ret);
         this.db.escondeProcessando();

          this.db.agendas = ret.recursos
          this.agendas = ret.recursos

          this.db.renovaToken(ret.novoToken)
          ;
        }
      },
      (err) => {
    //    this.db.escondeProcessando(err.error);
      }
    );
    } 
  }

  seleciona(agenda: any) {
    this.mc.dismiss({
      status: true,
      agenda: agenda,
    });
  }

  atualiza (event) {
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  busca(evt: CustomEvent) {
    this.db.agendas = this.agendas.filter((svc) => {
      return this.db.compara([svc.descricao], evt.detail.value);
    });
  }
}
