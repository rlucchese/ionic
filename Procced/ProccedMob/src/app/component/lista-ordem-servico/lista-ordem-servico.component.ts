import { AppComponent } from '../../app.component';
import { IncluiOrdemServicoPage } from '../../inclui-ordem-servico/inclui-ordem-servico.page';
import { Platform } from '@ionic/angular';
import { SelecaoNotificacaoComponent } from '../../selecao-notificacao/selecao-notificacao.component';
import { SelecaoClientePage } from '../../selecao-cliente/selecao-cliente.page';
import { DocumentoclienteService } from '../../api/documentocliente.service';
import { DbService } from '../../storage/db.service';
import { OrdemServicoService } from '../../api/ordem-servico.service';
import { OrdemServico, OpcaoFiltro, ListaResponse, GetCamposAuxiliaresResponse, GetDocumentosResponse } from '../../interfaces/ordem-servico';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-ordem-servico',
  templateUrl: './lista-ordem-servico.component.html',
  styleUrls: ['./lista-ordem-servico.component.scss'],
})
export class ListaOrdemServicoComponent implements OnInit {

  @Input('rotuloSingular') rotuloSingular: String='';
  @Input('rotuloPlural') rotuloPlural: String='';
  @Input('idTipoMob') idTipoMob: number;
  @Input('opcoesFiltro') opcoesFiltro: OpcaoFiltro[];
  
  public ordens: OrdemServico[];
  public buscaOrd: string;
  public mostraTodosCamposAuxiliares: boolean = true;
  public mostrandoFiltro: boolean = true;
  public mostraBusca: boolean = false;
  public idStatus: number = 1;
//  public opcoesFiltro: OpcaoFiltro[];
//  public _TIPO_MOB: number = 4

  //  public statusOS: [] = _STATUS_OS;

    constructor(
      private os: OrdemServicoService,
      public db: DbService,
      private docSvc: DocumentoclienteService,
      private selCli: SelecaoClientePage,
      public selNot: SelecaoNotificacaoComponent,
      public plt: Platform,
      public incOS: IncluiOrdemServicoPage,
      public router: ActivatedRoute,
      public app: AppComponent
    ) {}

    ngOnInit() {
      this.plt.ready().then(() => {
        if (!this.db.getCliente()) this.selecionaCliente();
        else {
          //console.log('willenter',1)
          this.carrega();
        }
      });
    } 

    getRotuloLocalizar(): String {
      return 'Localizar ' + this.rotuloSingular.toLowerCase();
    }
  
    async incluiOS() {
      const ret = await this.incOS.incluiOrdemServico(this.idTipoMob);
      if(ret && ret.data && ret.data.status) {
        this.carrega()
//        if(ret.data.qtdAnexos > 0) {
//          this.db.ordens.
//        }
      }
    }
  
    carrega(event?) {
//      console.log('entrou2');
      
//      console.log(this.router.snapshot.queryParams)
      if (!this.db.getCliente()) {
        this.selecionaCliente; //  sele this.selCli.selecionaCliente;
      } else {
        this.mostraTodosCamposAuxiliares = true
        this.db.mostraProcessando();
        this.os
          .Lista({
            token: this.db.app.token,
            idCliente: this.db.cliente.id,
            tipoMob: this.idTipoMob,
            idStatus: +this.idStatus,
            versao: 3,
          })
          .subscribe((ret: ListaResponse) => {
            this.db.ordens = ret.ordens;
            this.ordens = ret.ordens;
            this.db.escondeProcessando();
            this.db.renovaToken(ret.novoToken)

            if(event) event.target.complete();
  /*
            if(this.router.snapshot.queryParams) {
              this.buscaOrd = this.router.snapshot.queryParams.id
              this.router.snapshot.queryParams = null
            }
  */
            if(this.buscaOrd && this.buscaOrd !== '') this.busca(this.buscaOrd)
          },
          (err)=>{
            this.db.escondeProcessando();
            if(event) event.target.complete();
          });
        this.selNot.carregaQtdNotificacoes();
      }
    }
  
    async selecionaCliente() {
      const ret = await this.selCli.selecionaCliente();
      if (this.db.cliente) {
        this.carrega();
      }
    }
  
    getCamposAux(os: OrdemServico) {
      if (!os.camposAuxiliares) {
        this.os
          .GetCamposAuxiliares({
            token: this.db.app.token,
            idServico: os.idServico,
            idOrdem: os.id,
          })
          .subscribe((ret: GetCamposAuxiliaresResponse) => {
            os.camposAuxiliares = ret.camposAuxiliares;
            for(let i=0;i<os.camposAuxiliares.length;i++) {
              os.strCamposAuxiliares += os.camposAuxiliares[i].conteudo + '\n'
            }
          });
      }
    }
    
    seleciona(idDoc: number, event) {
      this.docSvc.abreDocumento(this.db.app.token, idDoc,()=>{});
      event.stopPropagation();
    }
  
    expandeCampo(os: OrdemServico, status: boolean) {
      os.mostraDocumentos = status;
      if (os.qtdDocumentos > 0 && status && !os.documentos) {
          this.getDocumentos(os.id,os)
      }
      os.mostraCamposAuxiliares = status;
      if (os.qtdCamposAuxiliares > 0 && status && !os.camposAuxiliares) {
          this.getCamposAux(os)
      }
    }
  
    expandeCampos(ordens: OrdemServico[], status: boolean) {
      this.mostraTodosCamposAuxiliares = !status;
      for (let os of ordens) {
        this.expandeCampo(os,status)
      }
    }
  
    getDocumentos(idOrdem: number, os: OrdemServico) {
      this.os
        .GetDocumentos({
          token: this.db.app.token,
          idOrdem: idOrdem,
        })
        .subscribe((ret: GetDocumentosResponse) => {
          os.documentos = ret.documentos;
        });
    }
  
    busca(chave: string) {
      this.buscaOrd = chave;
      this.ordens = this.db.ordens.filter((ord) => {
        return this.db.compara([ord.descricao, ord.strCamposAuxiliares], this.buscaOrd);
      });
    }
  }
  