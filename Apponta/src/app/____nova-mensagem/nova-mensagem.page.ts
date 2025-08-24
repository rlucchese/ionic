import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProducaoService } from '../api/producao.service';
import { CentroCusto, Equipamento } from '../interface/reval';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-nova-mensagem',
  templateUrl: './nova-mensagem.page.html',
  styleUrls: ['./nova-mensagem.page.scss'],
})
export class NovaMensagemPage implements OnInit {
  public ngForm=new FormGroup({})
  public equipamento: Equipamento
  public mensagem: string
  public centrosCusto: CentroCusto[]
  public equipamentos: Equipamento[]
  constructor(
    private mc: ModalController,
    public prdSvc: ProducaoService,
    public db: DbService,

  ) { this.carrega() }

  ngOnInit() {

  }
  async EnviaMsg() {

    this.prdSvc.EnviaMensagem(
      {
        token: this.db.getToken(),
        idEquipamento: this.equipamento.id,
        mensagem: this.mensagem
      }
    ).subscribe(
      (ret) => {
        console.log(ret)

      },
      (err) => this.db.escondeProcessando(err.error)
    )


  }
  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  async novaMensagem() {
    const modal = await this.mc.create({
      component: NovaMensagemPage,

    });

    await modal.present();
    return await modal.onWillDismiss();
  }

  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc
        .CentroCustoLista({
          token: this.db.token,
          idPlanta: 1
          //this.db.planta.id,
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              for (let i = 0; i < ret.centrosCusto.length; i++) {
                ret.centrosCusto[i].strEquipamentos = ''
                for (let j = 0; j < ret.centrosCusto[i].equipamentos.length; j++) {
                  ret.centrosCusto[i].strEquipamentos += ret.centrosCusto[i].equipamentos[j].descricao + ';'
                }
              }
              this.db.centrosCusto = ret.centrosCusto
              this.centrosCusto = ret.centrosCusto
              //              this.centrosDb = ret.centrosCusto;
              //              this.centros = this.centrosDb;
              console.log(this.centrosCusto[0].equipamentos)
              this.equipamentos = this.centrosCusto[0].equipamentos
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }
}
