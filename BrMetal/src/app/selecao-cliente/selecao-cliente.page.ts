import { VendasService } from '../api/vendas.service';
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
  public clientes2: any = [];

  constructor(
    public db: DbService,
    private venSvc: VendasService,
    public mc: ModalController
  ) { }

  ngOnInit() {
    //this.carrega()

  }

  ionViewDidEnter() {
    //    this.carregaStatus()
    this.carrega()
  }



  async selecionaCliente() {
    console.log('selecionaCliente')
    const modal = await this.mc.create({
      component: SelecaoClientePage,
    });
    await modal.present();

    return await modal.onWillDismiss();
  }

  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
 
        console.log('entrou carrega clientes')
        this.db.mostraProcessando();
        this.venSvc
          .ListaClientes({
            token: this.db.token,
          })
          .subscribe(
            (ret) => {
              //              if(ev) ev.target.complete();
              this.db.escondeProcessando();
              if (ret.status) {
                this.clientes = ret.clientes;
                this.clientes2 = ret.clientes;
                console.log(this.clientes)

              }
            },
            (err) => this.db.escondeProcessando(err.error)
          );
        //      } else this.clientes = this.db.clientes;
      }
    
  }

  seleciona(cliente: Cliente) {

    this.mc.dismiss({
      status: true,
      cliente: cliente,
    });
  }
  novoCliente(){
    this.mc.dismiss({
      status: true,
      cliente: {},
    });

  }
  atualiza(event) {
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  busca(evt) {
    this.clientes = this.clientes2.filter((cli) => {
      return this.db.compara([cli.nome, cli.cnpjcpf, cli.nomeFantasia], evt.detail.value);
    });
  }
}
