import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { ProducaoService } from "src/app/api/producao.service";
import {
  Programacao,
  ProgramacaoFinalizacao,
  ProgramacaoLiberada,
  StatusRecurso,
} from "src/app/interface/reval";
import { DbService } from "src/app/storage/db.service";

@Component({
  selector: "app-finalizar",
  templateUrl: "./finalizar.page.html",
  styleUrls: ["./finalizar.page.scss"],
})
export class FinalizarPage implements OnInit {
  @Input() idRecurso: number;
  @Input() idEventoInicio: number;

  public idsProgramacao: number[] = [];
  public operacoes: Programacao[] = [];
  public status: StatusRecurso;
  public qtdRepeticoes: number;

  public semProducao: boolean = false;

  public frmFinaliza = new FormGroup({})

  public frmRepet = new FormGroup({})

  constructor(
    public db: DbService,
    public prdSvc: ProducaoService,
    public mc: ModalController
  ) { }

  ngOnInit() {
    this.carrega();
  }

  carrega() {
    if (this.db.autenticado()) {

      if (this.idEventoInicio) {

      } else {
        this.db.mostraProcessando();
        this.prdSvc
          .GetStatus({
            token: this.db.token,
            idRecurso: this.idRecurso,
          })
          .subscribe(
            (ret) => {
              if (ret) {
                this.status = ret.statusRecurso;

                this.semProducao = false

                this.idsProgramacao = ret.statusRecurso.idsProgramacao
                this.qtdRepeticoes = +ret.statusRecurso.repeticoesAgrupamento

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
                      this.operacoes[i].quantidadeFabricada = +this.operacoes[i].quantidade;
                      this.operacoes[i].quantidadeNaoConforme = 0;
                    }
                    console.log(this.operacoes)
                  });
              } else this.db.escondeProcessando(ret.error);
            },
            (err) => this.db.escondeProcessando(err.error)
          );

      }
    }
  }

  trocaQtd(ev) {
    console.log(ev.target.value)
  }

  finalizarSemProducao() {
    this.semProducao = !this.semProducao;
    for (let i = 0; i < this.operacoes.length; i++) {
      if (this.semProducao) this.operacoes[i].quantidadeFabricada = 0;
      else this.operacoes[i].quantidadeFabricada = +this.operacoes[i].quantidade;
      this.operacoes[i].quantidadeNaoConforme = 0;
    }
  }

  async selecionaEvento(idEventoInicio: number) {
    const modal = await this.mc.create({
      component: FinalizarPage,
      componentProps: { idEventoInicio: idEventoInicio },
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  async selecionaFinalizar(idRecurso: number) {
    const modal = await this.mc.create({
      component: FinalizarPage,
      componentProps: { idRecurso: idRecurso },
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

  alteraQtdRepeticoes(ev: any) {
    let qtd = +ev.srcElement.value
    if (qtd < 0) qtd = 0
    else if (qtd > +this.status.repeticoesAgrupamento) qtd = +this.status.repeticoesAgrupamento

    this.qtdRepeticoes = qtd

    for (let i = 0; i < this.operacoes.length; i++) {

      let qtdFab = (this.operacoes[i], (this.operacoes[i].quantidade / this.status.repeticoesAgrupamento) * qtd);
      if (qtdFab > this.operacoes[i].quantidade) qtdFab = +this.operacoes[i].quantidade;
      this.operacoes[i].quantidadeFabricada = qtdFab;
      this.operacoes[i].quantidadeNaoConforme = 0;
    }
  }

  alteraQtdFabricada(op: Programacao, ev: any) {
    let qtd = +ev.srcElement.value
    if (qtd < 0) qtd = 0
    else if (qtd > +op.quantidade) {
      qtd = +op.quantidade
    }
    op.quantidadeFabricada = qtd
    if(qtd + op.quantidadeNaoConforme > +op.quantidade) op.quantidadeNaoConforme = +op.quantidade - qtd
  }

  alteraQtdNaoConforme(op: Programacao, ev: any) {
    let qtd = +ev.srcElement.value
    if (qtd < 0) qtd = 0
    else if (qtd > +op.quantidade) {
      qtd = +op.quantidade
    }
    op.quantidadeNaoConforme = qtd
    if(qtd + op.quantidadeFabricada > +op.quantidade) op.quantidadeFabricada = +op.quantidade - qtd
    //op.quantidadeFabricada = +op.quantidade - qtd
  }

  finalizar() {
    for (let i = 0; i < this.operacoes.length; i++) {
      if (this.operacoes[i].quantidadeNaoConforme > 0 && this.operacoes[i].motivo == null) return false
    }
    let oper: ProgramacaoFinalizacao[] = [];
    for (let i = 0; i < this.operacoes.length; i++) {
      let op: ProgramacaoFinalizacao = {
        id: this.operacoes[i].id,
        quantidadeFabricada: this.operacoes[i].quantidadeFabricada,
        quantidadeNaoConforme: this.operacoes[i].quantidadeNaoConforme,
        motivoNaoConforme: this.operacoes[i].motivo
      }
      oper.push(op);
    }
    console.log(oper)


    this.db.mostraProcessando()
    this.prdSvc
      .FinalizaOperacao({
        token: this.db.token,
        idRecurso: this.idRecurso,
        operacoes: oper,
      })
      .subscribe(
        (ret) => {
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
