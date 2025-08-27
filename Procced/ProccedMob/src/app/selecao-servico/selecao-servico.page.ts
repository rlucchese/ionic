import { Servico } from '../../../../_componentes/interfaces/usuario';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from './../api/usuario.service';
import { DbService } from './../storage/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao-servico',
  templateUrl: './selecao-servico.page.html',
  styleUrls: ['./selecao-servico.page.scss'],
})
export class SelecaoServicoPage implements OnInit {
  public idTipoMob: number
  public servicos: Servico[]
  public servicosDB: Servico[]

  constructor(
    public db: DbService,
    private usuSvc: UsuarioService,
    public mc: ModalController
  ) {
  }

  ngOnInit() {
    this.carrega();
  }

  async selecionaServico(tipoMob: number) {
    const modal = await this.mc.create({
      component: SelecaoServicoPage,
      componentProps: {idTipoMob: tipoMob} ,
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
          .GetServicos({
            token: this.db.app.token,
            idTipoMob: this.idTipoMob,
            idCliente: this.db.getCliente().id, 
          })
          .subscribe(
            (ret) => {
              this.db.escondeProcessando(ret.error);
              if (ret.status) {
                this.db.renovaToken(ret.novoToken)
                this.servicosDB = ret.servicos
                this.servicos = this.servicosDB;
//                console.log(this.servicos)
              }
            },
            (err) => this.db.escondeProcessando(err.error)
          );
    } 
  }

  seleciona(servico: Servico) {
    this.mc.dismiss({
      status: true,
      servico: servico,
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
    this.servicos = this.servicosDB.filter((svc) => {
      return this.db.compara([svc.descricao], evt.detail.value);
    });
  }
}
