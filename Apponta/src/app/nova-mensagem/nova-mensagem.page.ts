
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MensagemService } from '../api/mensagem.service';
import { ProducaoService } from '../api/producao.service';
import { CentroCusto, Equipamento } from '../interface/reval';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-nova-mensagem',
  templateUrl: './nova-mensagem.page.html',
  styleUrls: ['./nova-mensagem.page.scss'],
})
export class NovaMensagemPage implements OnInit {
  public equipamento: Equipamento
  public mensagem: string
  public centrosCusto: CentroCusto[]
  public equipamentos: Equipamento[]
  constructor(
    private mc: ModalController,
    public msgSvc: MensagemService,
    public prdSvc: ProducaoService,

    public db: DbService,

  ) { 
   }

  ngOnInit() {this.carrega()

  }
  async EnviaMsg() {

    this.msgSvc.EnviaMensagem(
      {
        token: this.db.getToken(),
        idContato: 22,
        mensagem: this.mensagem
      }
    ).subscribe(
      (ret) => {
        console.log(ret)
        this.mc.dismiss({
          status: true,
        });
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

    if (this.db.autenticado() && !this.db?.centrosCusto) {
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
    else {

      console.log('passou')
      this.equipamentos = this.db.centrosCusto[0].equipamentos

    }
  }
}
