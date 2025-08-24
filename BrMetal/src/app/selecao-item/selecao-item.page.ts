import { Produto } from './../interface/brMetal';
import { VendasService } from '../api/vendas.service';
import { DbService } from "../storage/db.service";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-selecao-item",
  templateUrl: "./selecao-item.page.html",
  styleUrls: ["./selecao-item.page.scss"],
})
export class SelecaoItemPage implements OnInit {
  @Input() filtro: any;
  public itens: any = [];
  public itens2: any = [];
public filtroBusca: string
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



  async selecionaProduto(busca?: string) {
    console.log('selecionaItem')
    const modal = await this.mc.create({
      component: SelecaoItemPage,
      componentProps: { filtro: busca }

    });
    await modal.present();

    return await modal.onWillDismiss();
  }

  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
 
        console.log('entrou carrega itens')
        this.db.mostraProcessando();
        this.venSvc
          .ListaProdutos({
            token: this.db.token,
          })
          .subscribe(
            (ret) => {
              //              if(ev) ev.target.complete();
              this.db.escondeProcessando();
              if (ret.status) {
                this.itens = ret.produtos;
                this.itens2 = ret.produtos;
                console.log(this.itens)

              }
            },
            (err) => this.db.escondeProcessando(err.error)
          );
          this.filtroBusca = this.filtro
        //      } else this.clientes = this.db.clientes;
      }
    
  }

  seleciona(item: Produto) {

    this.mc.dismiss({
      status: true,
      item: item,
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
    this.itens = this.itens2.filter((item) => {
      return this.db.compara([item.descricao, item.referencia], evt.detail.value);
    });
  }
}
