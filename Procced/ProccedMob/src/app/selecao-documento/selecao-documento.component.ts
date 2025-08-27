import { LogDocumentosPage } from './../log-documentos/log-documentos.page';
import { SelecaoNotificacaoComponent } from './../selecao-notificacao/selecao-notificacao.component';
import {
  Classificacao,
  Documento,
  DocumentoCliente,
} from "./../interfaces/documento-cliente";
import { Cliente } from "../../../../_componentes/interfaces/usuario";
import { ModalController, Platform } from "@ionic/angular";
import { DbService } from "./../storage/db.service";
import { Component, Input, OnInit } from "@angular/core";
import { DocumentoclienteService } from "../api/documentocliente.service";

@Component({
  selector: "app-selecao-documento",
  templateUrl: "./selecao-documento.component.html",
  styleUrls: ["./selecao-documento.component.scss"],
})
export class SelecaoDocumentoComponent implements OnInit {
  @Input() classificacao: Classificacao;
  @Input() cliente: Cliente;

  public buscaDoc: string;

  public documentos: Documento[];
  public acessadoNaoLido: boolean = false;

  public EhDesktop: boolean = true;

  constructor(
    public db: DbService,
    private docSvc: DocumentoclienteService,
    public mc: ModalController,
    public selNot: SelecaoNotificacaoComponent,
    public plt: Platform,
    public logDoc: LogDocumentosPage

  ) {}

  ngOnInit() {
    this.carrega();
    this.buscaDoc = "";
    this.EhDesktop = this.plt.is("desktop")
  }

  carrega(forcaCarga: boolean = false) {
    //    if (true) //(!this.db.documentos || forcaCarga) {
    //      console.log("Carregando documentos");
    this.db.mostraProcessando();
    this.docSvc
      .Lista({
        token: this.db.app.token,
        idCliente: this.cliente.id,
        idClassificacao: this.classificacao.idClassificacao,
        versao: 3,
      })
      .subscribe(
        (ret) => {
          if (ret && ret.status) {
            this.db.documentos = ret.documentos;
            this.documentos = this.db.documentos;
            this.buscaDoc = "";
          }
          this.db.escondeProcessando();
        },
        (err) => {
          this.db.escondeProcessando(err.error);
        }
      );
    //    } else this.documentos = this.db.documentos;
  }

  async selecionaDocumento(cliente: Cliente, classificacao: Classificacao) {
    const modal = await this.mc.create({
      component: SelecaoDocumentoComponent,
      backdropDismiss: false,
      componentProps: {
        cliente: cliente,
        classificacao: classificacao,
      },
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  setLido(documento: Documento,lido: number) {
    if(!this.db.usuarioInterno() && this.db.registraAcessoDocumento()) {
      console.log(documento.lido,lido) 
      if(documento.lido !== lido) {
        this.acessadoNaoLido = true;
        this.selNot.carregaQtdNotificacoes()
      }
      documento.lido = lido;
      if(lido==1) documento.usuarioUltimoAcesso = 'Acessado agora'
    }
 }

 removeAcessoCliente(documento: Documento, event) {
    this.db.mostraProcessando()
    this.docSvc.RemoveAcessoCliente({
      token: this.db.app.token,
      id: documento.id
    }).subscribe((ret) => {
      if(ret.status == 'true') {
        this.documentos = this.documentos.filter(doc=>{return doc.id !== documento.id})
        this.db.renovaToken(ret.novoToken)

      } 
      this.db.escondeProcessando()
    },
    (err) => {
      this.db.escondeProcessando(err.error);
    }
    );
    event.stopPropagation()
  }

  setNaoLidoCliente(documento: Documento, event) {
    this.docSvc
      .SetNaoLido({
        token: this.db.app.token,
        id: documento.id,
      })
      .subscribe((ret) => {
        this.setLido(documento,0);
        //this.acessadoNaoLido = true;

      });
    event.stopPropagation();
  }
  seleciona(documento: Documento) {
    this.docSvc.abreDocumento(this.db.app.token, documento.id, () => {
      if (documento.lido == 0) {
        this.setLido(documento,1)
      }
    });
  }

  abreAnexo(documento: Documento, anexo) {
    let id = 'CA' + anexo + '_' + documento.sequencial
    this.docSvc.abreDocumento(this.db.app.token, id, () => {
      if (documento.lido == 0) {
        this.setLido(documento,1)
        this.acessadoNaoLido = true;

      }
    });
    event.stopPropagation()
  }

  download(documento: Documento, event: any) {
    this.docSvc.abreDocumento(this.db.app.token, documento.id, () => {
      if (documento.lido == 0) {
        this.setLido(documento,1)
      }
    },true);
    event.stopPropagation()
  }

  cancela() {
    this.mc.dismiss({
      status: false,
      acessadoNaoLido: this.acessadoNaoLido,
    });
  }

  busca(evt: CustomEvent) {
    // Implementar busca por vencimento tb ou não lidos....
    this.documentos = this.db.documentos.filter((doc) => {
      return this.db.compara([doc.titulo], evt.detail.value);
    });
  }
  async logDocumentos(documento: Documento, event) {
    event.stopPropagation()

      const ret = await this.logDoc.selecionaLog(
        this.db.cliente.id,
        documento.id,
        documento
      );

      console.log(ret.data);
    }
}
