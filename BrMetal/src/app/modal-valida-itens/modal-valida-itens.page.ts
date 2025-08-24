import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item, ItemValidacao } from '../interface/brMetal';
import { AppService } from '../api/app.service';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-modal-valida-itens',
  templateUrl: './modal-valida-itens.page.html',
  styleUrls: ['./modal-valida-itens.page.scss'],
})
export class ModalValidaItensPage implements OnInit {
@Input() itens: ItemValidacao[]
@Input() orcamento: number
  constructor(public mc: ModalController, public svcApp: AppService , public db:DbService) { }

  ngOnInit() {
  }
  async modalValidaItens(itens, orcamento) {
    console.log(itens)
    const modal = await this.mc.create({
      component: ModalValidaItensPage,
      componentProps: { 'itens': itens , orcamento: orcamento},
      cssClass: 'modalValidaClass'
    });
    await modal.present();

    return await modal.onWillDismiss();
  }

  okClick(){

    this.mc.dismiss()
  }

  ajustaItem(){
    this.db.mostraProcessando()

    this.svcApp.GetObjeto(
      'OrcamentoVenda',
      {
        token: this.db.getToken(),
        action: '_ajustaQuantidades',
       orcamento: this.orcamento,
       itens: this.itens
      }
    ).subscribe(
      (ret) => {
        if (ret.status == true) {
          this.svcApp.GetObjeto(
            'OrcamentoVenda',
            {
              token: this.db.getToken(),
              action:  '_geraPedido',
              id: this.orcamento
            }
          ).subscribe(
            (ret) => {
              if (ret.status == true) {
                this.db.escondeProcessando()

                this.mc.dismiss()



        }})
        } else {        this.db.escondeProcessando()
        }})

  }
  ajustaQtdItem(item){

    item.qtdAjustadaAnt = item.qtdAjustada;
    item.qtdAjustada = 0;
    item.cor='#ADD8E6'
  }
  retornaQtdItem(item){

    item.qtdAjustada = item.qtdAjustadaAnt;
    item.qtdAjustadaAnt = 0;
    item.cor=''
  }
}
