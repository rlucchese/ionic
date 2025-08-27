import { DocumentoclienteService } from './../api/documentocliente.service';
import { SelecaoNotificacaoComponent } from './../selecao-notificacao/selecao-notificacao.component';
import { UsuarioService } from './../api/usuario.service';
import { DbService } from './../storage/db.service';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorCliente } from '../../../../_componentes/interfaces/usuario';
import { WsProccedService } from './../api/ws-procced.service';
import { NotificacoesService } from './../api/notificacoes.service';

interface ICallback {
  ()
} 
@Component({
  selector: 'app-documentos-colaborador',
  templateUrl: './documentos-colaborador.page.html',
  styleUrls: ['./documentos-colaborador.page.scss'],
})
export class DocumentosColaboradorPage implements OnInit {
  @Input() cpf: string;
  @Input() nome: string;
  @Input() idCliente: number;
  public clientes: ColaboradorCliente[];
  public EhDesktop: boolean = true;
  public acessadoNaoLido: boolean = false;

  constructor(public db: DbService,
    public svcUsu: UsuarioService,
    public mc:ModalController,
    private route: ActivatedRoute, 
    private router: Router,
    private plt: Platform,
    private svc: WsProccedService,
    private notSvc: NotificacoesService,
    public selNot: SelecaoNotificacaoComponent,
    public docSvc: DocumentoclienteService,
    public alertController: AlertController
    ) { }

  ngOnInit() {

    if(this.db.app?.tipoUsuario == 3) { 
        this.cpf = this.db.app.cpf
        this.nome = this.db.app.nome
        this.idCliente = 0
      //  this.db.app.token  = getNav.extras.state.AppColaborador.token
        //console.log(getNav.extras.state.AppColaborador.token)
       // this.carrega();
      }

    this.carrega();
    this.carregaQtdNotificacoes();
    this.EhDesktop = this.plt.is("desktop")

  }

  async documentosColaborador(cpf: string, idCli: number, nome: string = '') {
    console.log('nome:', nome)
    const modal = await this.mc.create({
      component: DocumentosColaboradorPage,
      componentProps: { cpf: cpf, idCliente: idCli, nome: nome },
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  getTitulo() {
    let ret = this.db.formataCPF(this.cpf);
    if(this.nome) ret = this.nome + ' (' + ret + ')';
    return ret;
  }

/*   abreDocumento(token: string) {
    console.log(token);
    this.svcUsu.GetDocumentoColaborador({token: this.db.app.token,tokenDocumento: token})
    .subscribe((ret) => {
      console.log(ret.link)
      this.db.escondeProcessando()
      if(ret.status=='true') {
        Browser.open({ url: ret.link });
        //callback();
      } else {
        this.db.setMensagem(ret.error);
      }
    })
  } */



/* abreDocumento(id: string) {
  console.log(id)
    this.db.mostraProcessando();
    if (this.plt.is('android')) { // only change for iOS
      this.svcUsu.GetDocumentoColaborador({
        token: this.db.app.token,
        tokenDocumento: id,
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
        tokenDocumento: id,
        tipoRetorno: 2,
      })
        .subscribe((ret) => {
          this.db.escondeProcessando()
          if(ret.status=='true') {
            console.log(ret)

            Browser.open({ url: ret.link });
          } else {
            this.db.setMensagem(ret.error);
          }
        });
    }
  }
 */
///-----------
abreDocumento(token: string, id: string, callback: ICallback, download?: boolean,) {
  this.db.mostraProcessando();
  if (this.plt.is('android') && this.plt.is('capacitor')) { // only change for iOS
    this.svcUsu.GetDocumentoColaborador({
      token: this.db.app.token,
      tokenDocumento: id,
      tipoRetorno: 1
    })
      .subscribe((ret) => {
        this.db.renovaToken(ret.novoToken)
        this.svc.fileWrite(ret.titulo, ret.conteudo)
        this.db.escondeProcessando()
        callback();
      });
  } else if (download) {
    this.svcUsu.GetDocumentoColaborador({
      token: this.db.app.token,
      tokenDocumento: id,
      tipoRetorno: 1
    })
      .subscribe(async (ret) => {
        this.db.escondeProcessando()
        if (ret.status == 'true') {
          this.db.renovaToken(ret.novoToken)
          this.docSvc.salvaArquivo(ret.conteudo, ret.titulo)
          callback();

        } else {
          this.db.setMensagem(ret.error);
        }
      })
  } else if (!download)
  this.svcUsu.GetDocumentoColaborador({
    token: this.db.app.token,
    tokenDocumento: id,
    tipoRetorno: 2,
  })
      .subscribe(async (ret) => {
        this.db.escondeProcessando()
        if (ret.status == 'true') {
//            this.db.renovaToken(ret.novoToken)
/* setTimeout(() => {
  Browser.open({ url: ret.link })
}) */ 
window.location.assign(ret.link) 

          callback();

        } else {
          this.db.setMensagem(ret.error);
        }
      })
}
////-----











  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  carrega() {
    console.log('cpf: ',this.cpf)
    console.log('idCliente: ', this.idCliente)

    this.svcUsu.GetDocumentosColaborador({token: this.db.app.token, idCliente: this.idCliente, cpf: this.cpf}).subscribe(
      (ret) => {
        console.log(ret); 
        this.clientes = ret.clientes;
      })


    //    if (true) //(!this.db.documentos || forcaCarga) {
    //      console.log("Carregando documentos");
/*
      this.db.mostraProcessando();
    this.svcUsu.GetDocumentosColaborador({
      token: this.db.app.token,
      idCliente: this.idCliente,
      cpf: this.cpf,

    })
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
    */
  }
  carregaQtdNotificacoes() {
    this.notSvc
      .Lista({
        token: this.db.app.token,
        status: 1,
        tipoUsuario: this.db.app?.tipoUsuario,
        apenasQuantidade: "true",
        versao: 3,
      })
      .subscribe((ret) => {
        if (ret.status) {
          console.log(ret)
          this.db.qtdNotificacoes = +ret.quantidade;
        }
      });
  }
  abreNotificacao() {
    this.selNot.selecionaNotificacao().finally(()=>{
      console.log('abrenotificacao')
      this.carrega();
      this.carregaQtdNotificacoes();
    });
  }


  setLido(documento: any,lido: number) {
    console.log(documento.lido,lido) 
  
    if(documento.lido !== lido) {
        this.acessadoNaoLido = true;
        this.carregaQtdNotificacoes()
      
      documento.lido = lido;
      documento.usuarioUltimoAcesso = 'Acessado agora'
    }
 }

 
  setNaoLidoColaborador(documento: any, event) {
    this.svcUsu
      .SetNaoLidoDocumentoColaborador({
        token: this.db.app.token,
        tokenDocumento: documento.token,
      })
      .subscribe((ret) => {
        this.setLido(documento,0);
      });
    event.stopPropagation();
  }
  seleciona(documento: any) {
    this.abreDocumento(this.db.app.token, documento.token, () => {
      if (documento.lido == 0) {
        this.setLido(documento,1)
      }
    });
  }

  download(documento: any, event: any) {
    this.abreDocumento(this.db.app.token, documento.token, () => {
      if (documento.lido == 0) {
        this.setLido(documento,1)
      }
    },true);
    event.stopPropagation()
  }

  excluiDocumentoColaborador(documento: any, event) {
    
   this.presentAlertConfirm(documento, event)  

    event.stopPropagation()
  }


  async presentAlertConfirm(documento: any, event) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão do arquivo!',
     
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.db.mostraProcessando()
            this.svcUsu.ExcluiDocumentoColaborador({
              token: this.db.app.token,
              tokenDocumento: documento.token
            }).subscribe((ret) => {
              if(ret.status == 'true') {
        
                this.db.setMensagem('Documento Excluido com Sucesso')
                this.carrega();
              } 
              this.db.escondeProcessando()
            },
            (err) => {
              this.db.escondeProcessando(err.error);
            }
            );
          }
        }
      ]
    });
  
    await alert.present();
  }
}
