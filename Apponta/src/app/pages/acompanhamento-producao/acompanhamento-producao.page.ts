import { Component, OnInit } from '@angular/core';
import { ProducaoService } from 'src/app/api/producao.service';
import { AlteraOrdemFabricacaoRequest, OperacaoAlterar, OrdemAcompanhamento, OrdemAlterada, ProcessoOrdem } from 'src/app/interface/reval';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-acompanhamento-producao',
  templateUrl: './acompanhamento-producao.page.html',
  styleUrls: ['./acompanhamento-producao.page.scss'],
})
export class AcompanhamentoProducaoPage implements OnInit {

  public carregando: boolean = false;
  public processos: any[];
  public ordens: OrdemAcompanhamento[];
  public ordensOrg: OrdemAcompanhamento[];
  public pedidosEmAberto: number[];
  public geradoEm: Date;
  public selBaixar: OperacaoAlterar[] = [];
  public selReverter: OperacaoAlterar[] = [];
  public obsAlterada: OrdemAlterada[] = [];
  public idStatus: string = 'pedidosEmProducao';
  public strBusca: string = '';
  public idAcompanhamento: string = "1";

  constructor(public db: DbService,
    public prdSvc: ProducaoService) { }

  ngOnInit() {
    this.carrega();
  }

  atualiza(gerar: boolean) {
    this.carrega(gerar);
  }

  busca() {
    if (this.idStatus == 'todas') this.ordens = this.ordensOrg;
    else if (this.idStatus == 'pedidosEmProducao') {
      this.ordens = this.ordensOrg.filter((ord) => {
        return (!ord.finalizada || this.pedidosEmAberto.includes(ord.pedido))
      })
    }
    else if (this.idStatus == 'pedidosFinalizados') {
      this.ordens = this.ordensOrg.filter((ord) => {
        return (ord.finalizada && !this.pedidosEmAberto.includes(ord.pedido))
      })
    }
    else this.ordens = this.ordensOrg.filter((ord) => {
      return (ord.finalizada && this.idStatus == 'finalizadas') ||
        (!ord.finalizada && this.idStatus == 'emProducao')
    })


    if (this.strBusca !== '') {
      this.ordens = this.ordens.filter((of) => {
        return this.db.compara([of.numero, of.pedido, of.cliente], this.strBusca);
      });
    }

    console.log(this.pedidosEmAberto)
    console.log(this.ordens)
  }

  carrega(gerar: boolean = false) {
    this.carregando = true
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.selBaixar = []
      this.selReverter = []
      this.obsAlterada = []
      if (gerar) this.db.mostraProcessando('Gerando acompanhamento');
      else this.db.mostraProcessando();
      this.prdSvc.AcompanhamentoOrdens({
        token: this.db.token,
        idAcompanhamento: +this.idAcompanhamento,
        gerar: gerar
      }).subscribe(
        (ret) => {
          if (ret.status) {
            this.geradoEm = ret.geradoEm;
            this.processos = ret.processos;

            this.pedidosEmAberto = ret.pedidosEmAberto;
            //            console.log(ret.pedidosEmAberto)

            this.ordens = ret.ordens;
            this.ordensOrg = ret.ordens;
            this.ordensOrg.forEach((of) => {
              of.observacaoAnt = of.observacao
              if (!of.revisarEstrutura) of.revisarEstrutura = false
              of.revisarEstruturaAnt = of.revisarEstrutura

              if (!of.ordemOrigem) of.ordemOrigem = ""
              of.ordemOrigemAnt = of.ordemOrigem

              if(!of.cor) of.cor="white";
            })
            console.log(this.ordens);
            //            this.obsAlterada = []
            //            console.log(this.selBaixar?.length,this.selReverter?.length,this.obsAlterada.length)
            //            console.log(this.selBaixar,this.selReverter,this.obsAlterada)

            this.busca();

//            const select = document.querySelector('.custom-options');
//            select.interfaceOptions = {
//               cssClass: 'my-custom-interface'
//            };
          }
          this.db.escondeProcessando();
          this.carregando = false
        },
        (err) => {
          this.db.escondeProcessando(err.error)
          this.carregando = false
        }
      );
    }
  }

  alteraCor(ev,ord) {

    this.prdSvc.AlteraCorOrdemFabricacao({
      token: this.db.token,
      idOrdem: ord.id,
      cor: ev.detail.value
    }).subscribe(
      (ret) => {
        if (ret.status) {
          ord.cor = ev.detail.value
        }
      }
    );
  }

  getQuantidade(of, proc) {
    //    let v = 'processo_' + proc.id;

    //    if (of.hasOwnProperty(v)) {
    //      console.log(of[v]);
    //      ret = of[v];
    //    }   
    //    console.log(of.$v);
    //    if(of[v] >= 0) return ''
    //    else return 'X';
    //    console.log(of.processos[proc.id])
    if (!of.processos[proc.id]) return "-"
    else if (of.processos[proc.id]?.quantidade > 0) return of.processos[proc.id].quantidade
    else return "X";
  }

  alteraOF(ord: OrdemAcompanhamento, check: boolean) {
    console.log('entrou');
    if (!this.carregando) {
      //    let obs: OrdemAcompanhamento[];
      //    obs = this.ordens.filter((ordem) => {if(ordem.id == ord.id) return ordem});

      if (check) ord.revisarEstrutura = !ord.revisarEstrutura;

      //    console.log(ord.id);
      this.obsAlterada = this.obsAlterada.filter((of) => {
        return of.idOrdem !== ord.id;
      })

      if (ord.observacaoAnt !== ord.observacao || ord.revisarEstruturaAnt != ord.revisarEstrutura ||
          ord.ordemOrigemAnt !== ord.ordemOrigem) {
        this.obsAlterada.push({ idOrdem: ord.id, observacaoAcompanhamento: ord.observacao, revisarEstrutura: ord.revisarEstrutura, ordemOrigem: ord.ordemOrigem })
      }
    }
  }

  toogleBaixar(ord: OrdemAcompanhamento, idProcesso: number) {
    if (!ord.processos[idProcesso].checked) {
      for (let i = 0; i <= idProcesso; i++) {
        if (ord.processos[i] && !ord.processos[i].checked) {
          ord.processos[i].checked = true;
          if (ord.processos[i].quantidade > 0) {
            let procAlt: OperacaoAlterar = {
              idOrdem: ord.id,
              idOperacao: ord.processos[i].idOperacao,
              checked: true
            }
            this.selBaixar.push(procAlt);
          }
          else this.selReverter = this.selReverter.filter((pa) => { return pa.idOrdem != ord.id || pa.idOperacao != ord.processos[i].idOperacao; });
        }
      }
    } else {
      for (let i = idProcesso; i < 30; i++) {
        if (ord.processos[i] && ord.processos[i].checked) {
          ord.processos[i].checked = false;
          if (ord.processos[i].quantidade > 0) {
            this.selBaixar = this.selBaixar.filter((pa) => {
              return pa.idOrdem != ord.id || pa.idOperacao != ord.processos[i].idOperacao;
            });
          } else {
            let procAlt: OperacaoAlterar = {
              idOrdem: ord.id,
              idOperacao: ord.processos[i].idOperacao,
              checked: false
            }
            this.selReverter.push(procAlt);
          }
        }
      }
    }

    if (ord.processos[ord.processos.length - 1]?.checked && (!ord.pedido || ord.nota)) ord.finalizada = true
    else ord.finalizada = false
  }

  salvarObservacoes(esconde: boolean = false) {
    if (this.obsAlterada.length > 0) {
      let paramAlt: AlteraOrdemFabricacaoRequest;
      paramAlt = {
        token: this.db.token,
        ordens: this.obsAlterada
      }
      this.db.mostraProcessando();
      this.prdSvc.AlteraOrdemFabricacao(paramAlt).subscribe(
        (ret) => {
          console.log(ret)
          this.db.escondeProcessando();
          if (ret.status) {
            this.carrega(false)
          }
        },
        (err) => {
          console.log(err)
          this.db.escondeProcessando(err.error)
        }
      );
    } else {
      if (esconde) {
        this.db.escondeProcessando()
        this.carrega(false)
      }

    }
  }

  salvar() {
    this.db.mostraProcessando();
    if (this.selBaixar.length + this.selReverter.length == 0) this.salvarObservacoes(true)
    else {
      let ops: OperacaoAlterar[] = [];
      for (let i = 0; i < this.selBaixar.length; i++) {
        ops.push(this.selBaixar[i])
      }
      for (let i = 0; i < this.selReverter.length; i++) {
        ops.push(this.selReverter[i])
      }
      let param = {
        token: this.db.token,
        idAcompanhamento: 1,
        operacoes: ops
      }
      console.log(param);
      this.prdSvc.AlteraBaixaOperacoes(param).subscribe(
        (ret) => {
          console.log(ret)
          //        this.db.escondeProcessando();
          //        if (ret.status) {
          this.salvarObservacoes(true);
          //        }
        },
        (err) => {
          console.log(err)
          this.db.escondeProcessando(err.error)
        }
      );
    }

  }

  atrasado(ord) {
    return (!ord?.finalizada && ord?.entregaPedido < this.geradoEm);
  }

}
