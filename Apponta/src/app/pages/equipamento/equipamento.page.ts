import { CentroCusto, Equipamento } from './../../interface/reval';
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ProducaoService } from "src/app/api/producao.service";
import { DbService } from "src/app/storage/db.service";

@Component({
  selector: "app-equipamento",
  templateUrl: "./equipamento.page.html",
  styleUrls: ["./equipamento.page.scss"],
})
export class EquipamentoPage implements OnInit {
  @Input() idPlanta: number;

  public nomePlanta: string;

  public centrosCusto: CentroCusto[]

  constructor(
    public db: DbService,
    public prdSvc: ProducaoService,
    private route: ActivatedRoute,
    private router: Router,
    private mc: ModalController
  ) {
    /*
      this.route.queryParams.subscribe(params => {
        let getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
          this.idPlanta = getNav.extras.state.valorParaEnviar;
        }
      }); 
*/

    this.idPlanta = this.db.getIdPlanta();
    this.nomePlanta = this.db.getNomePlanta();
  }

  ngOnInit() {
    this.carrega();
  }

 /*
  async selecionaEquipamento() {
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
*/

  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc
        .CentroCustoLista({
          token: this.db.token,
          idPlanta: this.idPlanta,
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              for(let i=0; i < ret.centrosCusto.length; i++) {
                ret.centrosCusto[i].strEquipamentos = ''
                for(let j=0;j<ret.centrosCusto[i].equipamentos.length;j++) {
                  ret.centrosCusto[i].strEquipamentos += ret.centrosCusto[i].equipamentos[j].descricao + ';'
                }
              }
              this.db.centrosCusto = ret.centrosCusto
              this.centrosCusto = ret.centrosCusto
//              this.centrosDb = ret.centrosCusto;
//              this.centros = this.centrosDb;
              // console.log(this.centros)
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }

  busca(evt: any) {
    this.centrosCusto = this.db.centrosCusto.filter((cc) => {
      return this.db.compara([cc.descricao,cc.strEquipamentos], evt.detail.value);
    });
  }

  async selecionaEquipamento(idPlanta: number) {
    const modal = await this.mc.create({
      component: EquipamentoPage,
      componentProps: { idPlanta: idPlanta },
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  seleciona(equip: Equipamento) {
    this.db.setEquipamento(equip)
    this.mc.dismiss({
      status: true,
      equipamento: equip,
    });
  }
}
