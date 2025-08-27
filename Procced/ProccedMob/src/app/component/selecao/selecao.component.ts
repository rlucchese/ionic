import { ModalController } from '@ionic/angular';
import { UsuarioService } from './../../api/usuario.service';
import { DbService } from './../../storage/db.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../../../_componentes/interfaces/usuario';

@Component({
  selector: 'app-sel',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.scss'],
})
export class SelecaoComponent implements OnInit {
  public clientes: any = [];

  constructor(
    public db: DbService,
    private usuSvc: UsuarioService,
    public mc: ModalController

  ) {}

  ngOnInit() {
    console.log('carrega sele')
    this.carrega();
  
  }

  async selecionaCliente() {
    const modal = await this.mc.create({
      component: SelecaoComponent,
    });
    await modal.present();
    this.db.setClassificacoes(null);
    this.db.setClassificacoesCliente(null);
    //    this.classificacoes = null
    this.db.documentos = null;
    //    this.classificacao = null
    return await modal.onWillDismiss();
  }

  carrega() {
    if (this.db.autenticado()) {
//      if (!this.db.clientes || forcaCarga) {
        console.log('entrou carrega clientes')  
        this.db.mostraProcessando();
        this.usuSvc
          .GetClientes({
            token: this.db.app.token,
          })
          .subscribe(
            (ret) => {
//              if(ev) ev.target.complete();
              this.db.escondeProcessando(ret.error);
              if (ret.status) {
                this.db.clientes = ret.clientes;
                this.clientes = this.db.clientes;
              }
            },
            (err) => this.db.escondeProcessando(err.error)
          );
//      } else this.clientes = this.db.clientes;
    } 
  }

  seleciona(cliente: Cliente) {
    this.db.setCliente(cliente);
    this.mc.dismiss({
      status: true,
      cliente: cliente,
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
    this.clientes = this.db.clientes.filter((cli) => {
      return this.db.compara([cli.nome], evt.detail.value);
    });
  }
}

