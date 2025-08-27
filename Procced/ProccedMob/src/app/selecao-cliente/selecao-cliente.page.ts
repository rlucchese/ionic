import { UsuarioService } from "./../api/usuario.service";
import { Cliente } from "../../../../_componentes/interfaces/usuario";
import { DbService } from "./../storage/db.service";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-selecao-cliente",
  templateUrl: "./selecao-cliente.page.html",
  styleUrls: ["./selecao-cliente.page.scss"],
})
export class SelecaoClientePage implements OnInit {
  public clientes: any = [];

  constructor(
    public db: DbService,
    private usuSvc: UsuarioService,
    public mc: ModalController
  ) {}

 ngOnInit() {
  //this.carrega()

  } 

  ionViewDidEnter(){
//    this.carregaStatus()
this.carrega()
  }



  async selecionaCliente() {
    console.log('selecionaCliente')
    const modal = await this.mc.create({
      component: SelecaoClientePage,
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
              this.db.escondeProcessando();
              if (ret.status) {
                this.db.clientes = ret.clientes;
                this.clientes = this.db.clientes;
                 if(this.clientes.length == 1) {
                  this.seleciona(this.clientes[0]);
                  this.db.renovaToken(ret.novoToken)

                }
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
