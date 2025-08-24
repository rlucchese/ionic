import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProducaoService } from '../api/producao.service';
import { Equipamento, Operador } from '../interface/reval';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.page.html',
  styleUrls: ['./operador.page.scss'],
})
export class OperadorPage implements OnInit {

  public idEquipamento: number
  public operadores: Operador[]
  public operadoresCarga: Operador[]

  constructor(public db: DbService,
    public prdSvc: ProducaoService,
    private mc: ModalController
) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.carrega()
  }

  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc
        .TrocaOperadorLista({
          token: this.db.token,
          idEquipamento: this.idEquipamento
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              this.operadores = ret.operadores
              this.operadoresCarga = ret.operadores
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }

  busca(evt: any) {
    this.operadores = this.operadoresCarga.filter((oper) => {
      return this.db.compara([oper.usuario], evt.detail.value);
    });
  }

  async selecionaOperador(idEquip: number) {
    const modal = await this.mc.create({
      component: OperadorPage,
      componentProps: { idEquipamento: idEquip },
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  seleciona(oper: Operador) {
    this.mc.dismiss({
      status: true,
      operador: oper
    });
  }

}
