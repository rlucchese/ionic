import { ProducaoService } from "src/app/api/producao.service";
import { DbService } from "src/app/storage/db.service";
import { FormGroup } from "@angular/forms";
import {
  OperacoesAgrupar,
  Programacao,
  StatusRecurso,
} from "src/app/interface/reval";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-agrupamento",
  templateUrl: "./agrupamento.page.html",
  styleUrls: ["./agrupamento.page.scss"],
})
export class AgrupamentoPage implements OnInit {
  @Input() idRecurso: number;

  public idsProgramacao: number[] = [];
  public operacoes: Programacao[] = [];
  public status: StatusRecurso;
  public qtdRepeticoes: number = 1;
  public descricao: string;

  public semProducao: boolean = false;

  public frmAgrupa = new FormGroup({});

  public frmRepet = new FormGroup({});

  constructor(
    public db: DbService,
    public prdSvc: ProducaoService,
    public mc: ModalController
  ) {}

  ngOnInit() {
    this.carrega();
  }

  carrega() {
    if (this.db.autenticado()) {
      if (this.idsProgramacao) {
        this.db.mostraProcessando();

        this.operacoes = [];
        this.prdSvc
          .GetOperacoes({
            token: this.db.token,
            operacoes: this.idsProgramacao,
          })
          .subscribe((ret) => {
            this.db.escondeProcessando();
            this.operacoes = ret.operacoes;

            for (let i = 0; i < this.operacoes.length; i++) {
              this.operacoes[i].quantidadeFabricada =
                +this.operacoes[i].quantidade;
              this.operacoes[i].quantidadeNaoConforme = 0;
            }
            console.log(this.operacoes);
          });
      }
    }
  }

  async selecionaAgrupar(ids: number[]) {
    const modal = await this.mc.create({
      component: AgrupamentoPage,
      componentProps: { idsProgramacao: ids },
      cssClass: "modal-css",
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  alteraQtdRepeticoes(ev: any) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;
    this.qtdRepeticoes = qtd;

    for (let i = 0; i < this.operacoes.length; i++) {
      let qtdFab = Math.round((this.operacoes[i].quantidade / qtd) * 1000)/1000;
      this.operacoes[i].quantidadeFabricada = qtdFab;
    }
  }

  alteraQtdFabricada(op: Programacao, ev: any) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;
    else if (qtd > +op.quantidade) {
      qtd = +op.quantidade;
    }
    op.quantidadeFabricada = qtd;
    op.quantidadeNaoConforme = +op.quantidade - qtd;
  }

  alteraQtdNaoConforme(op: Programacao, ev: any) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;
    else if (qtd > +op.quantidade) {
      qtd = +op.quantidade;
    }
    op.quantidadeNaoConforme = qtd;
    op.quantidadeFabricada = +op.quantidade - qtd;
  }

  agrupar() {
    console.log(this.operacoes);

    let opsAgrupar: OperacoesAgrupar[] = [];
    for (let i = 0; i < this.operacoes.length; i++) {
      if (this.operacoes[i].quantidadeFabricada > 0) {
        opsAgrupar.push({
          id: this.operacoes[i].id,
          quantidadeAgrupar: this.operacoes[i].quantidadeFabricada,
        });
      }
    }

    this.db.mostraProcessando();
    this.prdSvc
      .AgrupaOperacoes({
        token: this.db.token,
        descricao: this.descricao,
        operacoes: opsAgrupar,
        quantidadeRepeticoes: this.qtdRepeticoes,
      })
      .subscribe(
        (ret) => {
          console.log(ret);
          this.db.escondeProcessando();
          if (ret.status) {
            this.mc.dismiss({
              status: true,
            });
          }
        },
        (err) => this.db.escondeProcessando(err.error)
      );
  }
}
