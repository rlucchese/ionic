import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  ItemPedido } from 'src/app/interface/reval';
import { DbService } from 'src/app/storage/db.service';


@Component({
  selector: 'app-selecao-pedido',
  templateUrl: './selecao-pedido.component.html',
  styleUrls: ['./selecao-pedido.component.scss'],
})
export class SelecaoPedidoComponent implements OnInit {
  @Input() itens: ItemPedido[]
@Input() notaItem: string


  public itensFiltro: any


  constructor(public db: DbService,
    public mc:ModalController) { }

  ngOnInit() {
      this.itensFiltro = this.itens
    console.log(this.itens)
   // this.carrega();
  }

  carrega() {
   
  }

  busca(evt: any) {
    this.itens = this.itensFiltro.filter((ev) => {
      return this.db.compara([ev.numeroPedido,ev.codigoItem, ev.descricao, ev.referencia, ev.quantidade], evt.detail.value);
    });
  }

  async selecionaPedido(itens: ItemPedido[], notaItem: string) {
    const modal = await this.mc.create({
      component: SelecaoPedidoComponent,
      componentProps: { itens: itens, 
        notaItem: notaItem
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

  seleciona(item: any) {
    this.mc.dismiss({
      status: true,
      item: item,
    });
  }
}
