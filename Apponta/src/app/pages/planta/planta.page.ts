import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { ProducaoService } from "src/app/api/producao.service";
import { Planta } from "src/app/interface/reval";
import { DbService } from "src/app/storage/db.service";
import { EquipamentoPage } from "../equipamento/equipamento.page";

@Component({
  selector: "app-planta",
  templateUrl: "./planta.page.html",
  styleUrls: ["./planta.page.scss"],
})
export class PlantaPage implements OnInit {
  public plantas: Planta[];
  public plantasDB: Planta[];
  public navCtr: NavController;
  constructor(
    public db: DbService,
    public prdSvc: ProducaoService,
    private router: Router,
    private mc: ModalController
  ) {}

  ngOnInit() {
//    this.carrega();
  }

  ionViewDidEnter(){
    this.carrega()
//    this.carregaStatus()
  }

  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc
        .PlantaLista({
          token: this.db.token,
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando(ret.error);
            if (ret.status) {
              this.db.plantas = ret.plantas
              this.plantas = ret.plantas;
              if (this.plantas.length == 1) {
                this.seleciona(this.plantas[0]);
                this.mc.dismiss({
                  status: true,
                });
              }
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }

  busca(evt: any) {
    this.plantas = this.db.plantas.filter((plt) => {
      return this.db.compara([plt.descricao], evt.detail.value);
    });
  }
  async selecionaPlanta() {
    const modal = await this.mc.create({
      component: PlantaPage,
    });
    await modal.present();
    return await modal.onWillDismiss();
  }
  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  seleciona(planta: Planta) {
    this.db.setPlanta(planta);
    this.mc.dismiss({
      status: true,
      planta: planta,
    });
  }
}
