import { AgrupamentoPage } from './../../agrupamento/agrupamento.page';
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ProducaoService } from "src/app/api/producao.service";
import { Operacao, ProgramacaoLiberada } from "src/app/interface/reval";
import { DbService } from "src/app/storage/db.service";

@Component({
  selector: "app-operacao",
  templateUrl: "./operacao.page.html",
  styleUrls: ["./operacao.page.scss"],
})
export class OperacaoPage implements OnInit {
  @Input() idEquipamento: number;
  @Input() permiteApontar: boolean=false;

  public operacoes: ProgramacaoLiberada[];
  public operacoesIni: ProgramacaoLiberada[];

  public opsSelecionadas: ProgramacaoLiberada[] = [];
  public opsAgrupadas: ProgramacaoLiberada[] = [];
  public statusOFIndividual: number = 2;

  constructor(
    public db: DbService,
    public prdSvc: ProducaoService,
    public mc: ModalController,
    public agr: AgrupamentoPage
  ) {}

  ngOnInit() {
    this.filtra();
  }

  filtra(mostraTodos: boolean = false) {
    console.log('filtrando')
    if(this.db.filtroAgrupamento == '' && this.db.filtroOrdem == '' && this.db.filtroPedido == '' && this.db.filtroPeca == '' && !mostraTodos) {
      this.operacoes = [];
      this.operacoesIni = [];
    } else {
      this.carrega(this.db.filtroAgrupamento,this.db.filtroOrdem,this.db.filtroPedido,this.db.filtroPeca);
    }
  }

  async agrupa() {
    let ops=[]
    for(let i=0;i<this.opsSelecionadas.length;i++) {
      for(let j=0;j<this.opsSelecionadas[i].idsProgramacao.length;j++){
        ops.push(+this.opsSelecionadas[i].idsProgramacao[j])
      }
    }
    const ret = await this.agr.selecionaAgrupar(ops);
    if (ret.data.status) {
      this.carrega(this.db.filtroOrdem,this.db.filtroPedido,this.db.filtroPeca)
    }
}

  desagrupa() {
    let agrupou: boolean = false
    for(let i=0;i<this.opsAgrupadas.length;i++) {
      this.prdSvc.DesagrupaOperacoes({
        token: this.db.token,
        idAgrupamento: this.opsAgrupadas[i].idAgrupamento
      }).subscribe((ret)=>{
        if(ret.status) {
          agrupou = true
          this.db.escondeProcessando()
          this.carrega(this.db.filtroOrdem,this.db.filtroPedido,this.db.filtroPeca)
        }
      })
    }
  }

  aponta() {
    let ops = []
    let idAgrupamento = 0;

    if(this.opsSelecionadas.length > 0) ops = this.opsSelecionadas
    else {
      ops = this.opsAgrupadas
      idAgrupamento = this.opsAgrupadas[0].idAgrupamento
    }

    this.mc.dismiss({
      status: true,
      operacoes: ops,
      idAgrupamento: idAgrupamento
    });
  }

  adicionaOperacaoExtra() {
    console.log('adicionando');
    if (this.db.autenticado()) {
      this.db.mostraProcessando();
      this.prdSvc
        .AdicionaOperacaoExtra({
          token: this.db.token,
          idEquipamento: this.idEquipamento,
          ordem: this.db.filtroOrdem
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              console.log("ret", ret);
              this.filtra();
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }

  carrega(agrupamento: string = null, ordem: string = null, pedido: string = null, peca: string = null) {
    if (this.db.autenticado()) {
      this.statusOFIndividual = 2;
      this.db.mostraProcessando();
      this.prdSvc
        .GetOperacoesLiberadas({
          token: this.db.token,
          idEquipamento: this.idEquipamento,
          ordem: ordem,
          pedido: pedido,
          peca: peca,
          agrupamento: agrupamento
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              console.log("ret", ret);
              /*
           //// Verificar se opsAgrupadas não for vazia selecionar do retorno
              this.opsAgrupadas.filter((op)=> {
                ret.operacoes.findIndex(op)
              })

              for(let i = 0; i< ret.operacoes.length; i++) {
                ret.operacoes[i].isChecked = this.opsAgrupadas.filter
                if(ret.operacoes[i])
                op.isChecked if()
              }
*/
              this.opsAgrupadas = [];
              this.opsSelecionadas = [];

              this.operacoes = ret.operacoes;
              this.operacoesIni = ret.operacoes;

//              console.log(ret);
              if(ret.statusOFIndividual) {
                this.statusOFIndividual = ret.statusOFIndividual;
              }

            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }

  busca(evt: any) {
    this.operacoes = this.operacoesIni.filter((op) => {
      return this.db.compara(
        [op.agrupamento, op.complemento, op.complemento2],
        evt.detail.value
      );
    });
  }

  check(op: ProgramacaoLiberada, event: any) {
    if (!op.isChecked) {
      if(( op.idAgrupamento && this.opsSelecionadas.length > 0) ||
         (!op.idAgrupamento && this.opsAgrupadas.length    > 0)) { 
        this.db.setMensagem('Não é possível selecionar Operações agrupadas e Não Agrupadas')
        op.isChecked = false
      } else {
        if (!op.idAgrupamento) this.opsSelecionadas.push(op);
        else this.opsAgrupadas.push(op);
        op.isChecked = true;
      }
    } else {
      op.isChecked = false;
      if (!op.idAgrupamento)
        this.opsSelecionadas = this.opsSelecionadas.filter((o) => {
          return o !== op;
        });
      else
        this.opsAgrupadas = this.opsAgrupadas.filter((o) => {
          return o !== op;
        });
    }
  }

  async selecionaOperacao(idEquipamento: number, permiteApontar: boolean = false) {
    const modal = await this.mc.create({
      component: OperacaoPage,
      componentProps: { idEquipamento: idEquipamento,
                        permiteApontar: permiteApontar },
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

  seleciona(op: ProgramacaoLiberada) {
    this.mc.dismiss({
      status: true,
      operacao: op,
    });
  }
}
