import { UsuarioService } from './../api/usuario.service';
import { WsProccedService } from './../api/ws-procced.service';
import { DocumentosColaboradorPage } from './../documentos-colaborador/documentos-colaborador.page';
import { OrdemServicoService } from './../api/ordem-servico.service';
import { GetCamposAuxiliaresResponse, GetDocumentosResponse } from './../interfaces/ordem-servico';
import { DocumentoCliente } from './../interfaces/documento-cliente';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { IonSearchbar, ModalController, Platform } from "@ionic/angular";
import { NotificacoesService } from "../api/notificacoes.service";
import { Documento } from "../interfaces/documento-cliente";
import { Notificacoes } from "../interfaces/notificacoes";
import { DbService } from "../storage/db.service";
import { Plugins } from "@capacitor/core";
import { DocumentoclienteService } from "../api/documentocliente.service";
import { Router } from '@angular/router';
import { OrdemServico } from '../interfaces/ordem-servico';


const { Browser } = Plugins;

@Component({
  selector: "app-selecao-notificacao",
  templateUrl: "./selecao-notificacao.component.html",
  styleUrls: ["./selecao-notificacao.component.scss"],
})
export class SelecaoNotificacaoComponent implements OnInit {
  @ViewChild('search') search:IonSearchbar;
 
  public buscaNot: string;
  public notificacoes: Notificacoes[];
  public documentos: Documento[]=[];
  public solicitacoes: OrdemServico[]=[];
  public mostrandoFiltro: Boolean = true;


  constructor(
    public db: DbService,
    private notSvc: NotificacoesService,
    public mc: ModalController,
    private docSvc: DocumentoclienteService,
    public router: Router,
    public os: OrdemServicoService,
    public svcUsu: UsuarioService,
    public svc: WsProccedService,
    public  plt: Platform
  ) {}

  ngOnInit() {
    this.carrega(true, 1);
    this.buscaNot = ""
  }

    
  
  ngAfterViewChecked(){
    console.log(this.search)
   //this.db.pushFilter;
    console.log('pushfilter - '+this.db.pushFilter)
  
}
  carrega(forcaCarga: boolean = false, status: number) {
    console.log(this.search)

    if (this.db.autenticado()) {
/*
      //      if (!this.db.clientes || forcaCarga) {
      console.log("entrou carrega notificacoes");
      console.log(status);
      this.db.mostraProcessando();
      this.notSvc
        .Lista({
          token: this.db.app.token,
          status: status,
          versao: 2,
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando(ret.error);
            if (ret.status) {
              this.db.notificacoes = ret.notificacoes;
              this.notificacoes = this.db.notificacoes;
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );
      //      } else this.clientes = this.db.clientes;

      */

      this.db.mostraProcessando();
      this.notSvc
        .Lista({
          token: this.db.app.token,
         // idCliente: this.db.cliente.id,
          status: status,
          versao: 3,
          tipoUsuario: this.db.app.tipoUsuario
        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando(ret.error);
            if (ret.status) {
//              this.db.documentos = ret.notificacoes;
//console.log(ret);
              this.db.documentosNotificacao = ret.documentos
              this.documentos = ret.documentos
              this.db.solicitacoesNotificacao = ret.solicitacoes
              this.solicitacoes = ret.solicitacoes
              if (this.db.pushFilter)

              {  console.log('pushfilter entrou - '+this.db.pushFilter)
            
                this.search.value = this.db.pushFilter;
                this.db.pushFilter = ""
              //  alert('énter' + this.search.value )
            }else{
              console.log('pushfilter nao entrou - '+this.db.pushFilter)
            
             // alert('énter2' || this.search.value )
              };            }
          },
          (err) => this.db.escondeProcessando(err.error)
        );



    }
  }

  fmtDataHora(data: Date) {
     let dta = data.toString()
     dta = dta.substr(8,2) + '/' + dta.substr(5,2) + '/' + dta.substr(0,4) + ' ' + dta.substr(11,5)
     return   dta // .getDay // + '/' + data.getMonth() + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes()
  }

    async selecionaNotificacao() {
    const modal = await this.mc.create({
      component: SelecaoNotificacaoComponent,
    });
    await modal.present();
    await modal.onWillDismiss();
  } 

  selecionaDoc(documento: Documento) {
   
   if (this.db.app.tipoUsuario != 3){
    this.docSvc.abreDocumento(this.db.app.token, documento.id,()=>{
      this.db.qtdNotificacoes--;
      this.documentos = this.documentos.filter(doc=>{return doc.id !== documento.id})
    })} else {
      this.db.mostraProcessando();
      if (this.plt.is('android') && this.plt.is('capacitor')) { // only change for iOS
        this.svcUsu.GetDocumentoColaborador({
          token: this.db.app.token,
          tokenDocumento: documento.id.toString(),
          tipoRetorno: 1
        })
          .subscribe((ret) => {
            console.log(ret)
            this.svc.fileWrite(ret.titulo, ret.conteudo)
            this.db.escondeProcessando()
          });
      } else {
        this.svcUsu.GetDocumentoColaborador({
          token: this.db.app.token,
          tokenDocumento: documento.id.toString(),
          tipoRetorno: 2,
        })
          .subscribe((ret) => {
            this.db.escondeProcessando()
            if(ret.status=='true') {
              console.log(ret)
  
              //setTimeout(() => {
               // Browser.open({ url: ret.link })
             // })
              window.location.assign(ret.link) 
                        } else {
              this.db.setMensagem(ret.error);
            }
          });
      }
    


//    this.docCol.abreDocumento(documento.id.toString())
  }
  }
  selecionaSol(solicitacao: OrdemServico) {
    this.mc.dismiss({
      status: true,
      tipo: 'sol',
      id: solicitacao.id,
    });
  }

/*  seleciona(notificacoes: Notificacoes) {
    if (notificacoes.servico == "TsmDocumentoCliente") {
      this.docSvc.abreDocumento(this.db.app.token, notificacoes.idServico, ()=>{});
    } 
if (notificacoes.servico == "TsmOrdemServico") {
//      console.log(notificacoes)
      
//      this.router.navigate(["tabs/tab2"])
//      Tab2Page.prototype.buscaOrd=notificacoes.idServico.toString()
//      this.cancela()
    } 
  }
*/
  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  busca(evt: CustomEvent) {
    this.documentos = this.db.documentosNotificacao.filter((not) => {
      return this.db.compara([not.titulo,not.cliente], evt.detail.value);
    });
    this.solicitacoes = this.db.solicitacoesNotificacao.filter((sol) => {
      return this.db.compara([sol.cliente,sol.descricao, sol.strCamposAuxiliares], evt.detail.value);
    });
  }

  carregaQtdNotificacoes() {
    this.notSvc
      .Lista({
        token: this.db.app.token,
        idCliente: this.db.cliente.id,
        status: 1,
        apenasQuantidade: "true",
        versao: 3,
      })
      .subscribe((ret) => {
        if (ret.status) {
          this.db.qtdNotificacoes = ret.quantidade;
        }
      });
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

  getDocumentos(idOrdem: number, os: OrdemServico) {
    this.os.GetDocumentos({
        token: this.db.app.token,
        idOrdem: idOrdem,
      })
      .subscribe((ret: GetDocumentosResponse) => {
        os.documentos = ret.documentos;
      });
  }

  expandeCampo(os: OrdemServico, status: boolean) {
    os.mostraCamposAuxiliares = status;
    if (os.qtdCamposAuxiliares > 0) {
      if (status == true) {
        this.getCamposAux(os)
      }
    }
    os.mostraDocumentos = status;
    if (os.qtdDocumentos > 0) {
      if (status == true) {
        this.getDocumentos(os.id,os)
      }
    }
  }

}
