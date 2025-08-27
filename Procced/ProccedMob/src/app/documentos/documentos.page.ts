import { SelecaoNotificacaoComponent } from "./../selecao-notificacao/selecao-notificacao.component";
import { SelecaoDocumentoComponent } from "./../selecao-documento/selecao-documento.component";
import { SelecaoClientePage } from "./../selecao-cliente/selecao-cliente.page";
import { WsProccedService } from "./../api/ws-procced.service";
import { ModalController, NavController, Platform } from "@ionic/angular";
import { UsuarioService } from "./../api/usuario.service";
import { DbService } from "./../storage/db.service";
import { Component, NgModule } from "@angular/core";
import { DocumentoclienteService } from "../api/documentocliente.service";
import {
  Classificacao,
  Documento,
  ListaClassificacoesResponse,
  ListaResponse,
} from "../interfaces/documento-cliente";
import { Browser } from "@capacitor/browser";
import { NotificacoesService } from "../api/notificacoes.service";
import { Notificacoes } from "../interfaces/notificacoes";
import { AppComponent } from '../app.component';
import { Cliente } from "../../../../_componentes/interfaces/usuario";



@Component({
  selector: "app-documentos",
  templateUrl: "documentos.page.html",
  styleUrls: ["documentos.page.scss"],
})
export class DocumentosPage {
  public logo: string;
  public documentos: Documento[];
  public idCliente: number;
  public idClassificacao: number;
  public clientes: Cliente[];

  constructor(
    private docSvc: DocumentoclienteService,
    private notSvc: NotificacoesService,
    public db: DbService,
    public usuSvc: UsuarioService,
    public plt: Platform,
    public svc: WsProccedService,
    public modalController: ModalController,
    public navCtrl: NavController,
    private selCli: SelecaoClientePage,
    private selDoc: SelecaoDocumentoComponent,
    public selNot: SelecaoNotificacaoComponent, 
    public app: AppComponent
  ) { }

  //ngOnInit(): boolean{
  //    console.log('ionviewcanenter')
  //     return this.db.autenticado()
  //}

  //  ionViewCanEnter(): boolean{
  //    console.log('ionviewcanenter')
  //    console.log('autenticado: ',this.db.autenticado())
  //     return this.db.autenticado()
  //   }

  ionViewWillEnter() {
    console.log(' wilenter' );
    
    if(this.db.app.tipoUsuario == 3) this.navCtrl.navigateRoot('/documentos-colaborador')
    else {
      this.plt.ready().then(() => {
        if (!this.db.getCliente()) this.selecionaCliente();
        else {
          this.carregaClassificacoes();
          this.app.setSelectedIndex('Documentos')

        }
      });
    }
  }

  abreNotificacao() {
    this.selNot.selecionaNotificacao().finally(()=>{
      this.carregaClassificacoes();
    });
  }

  carregaClassificacoes() {
    this.db.mostraProcessando();
    this.docSvc
      .ListaClassificacoes({
        token: this.db.app.token,
        idCliente: this.db.cliente?.id,
        versao: 3,
      })
      .subscribe(
        (ret) => {
          if (ret.status) {
            this.db.setClassificacoes(ret.classificacoes);
            this.db.setClassificacoesCliente(ret.classificacoesCliente);
            this.db.escondeProcessando();
            this.selNot.carregaQtdNotificacoes()
            this.db.renovaToken(ret.novoToken)
            ;
          }
        },
        (err) => {
          this.db.escondeProcessando(err.error);
        }
      );
  }

  async selecionaCliente() {

    console.log('entoru antes dbcliente')
    const ret = await this.selCli.selecionaCliente();
    console.log(ret)
    if (ret.data.status && this.db.cliente) {
      console.log('entoru com dbcliente')
      this.carregaClassificacoes();
    }
  }

  async selecionaClassificacao(classificacao: Classificacao) {
    const ret = await this.selDoc.selecionaDocumento(
      this.db.cliente,
      classificacao
    );
    console.log(ret.data);

    if (ret.data.acessadoNaoLido) this.carregaClassificacoes();
  }

  /*
    getClassificacoes() {
    this.docSvc
      .ListaClassificacoes({
        token: this.db.app.token,
        idCliente: this.idCliente,
      })
      .subscribe((ret: ListaClassificacoesResponse) => {
        this.db.classificacoes = ret.classificacoes;
        this.db.escondeProcessando;
      },
      (err) => {
        this.db.escondeProcessando
        this.db.setMensagem(err.error)
      });
  }
*/


  abreDocumento(idDocumento) {
    //    var data: any = {};
    //    data.id = idDocumento;
    //    data.tipoRetorno = 2;
    //    data.token = this.LocalStorage.getTokenMain();

    //    JSON.stringify(data);
    //    const loading = this.loadingCtrl.create({content: 'Aguarde...'})
    //    loading.present();
    console.log(this.plt.is("capacitor"));
    /* if (this.plt.is("capacitor")) {
// Como abrir arquivo ou link com capacitor????
      this.docSvc
      .Get({
        token: this.db.app.token,
        id: idDocumento,
        tipoRetorno: 1,
      })
      .subscribe((ret) => {
          console.log(ret.conteudo)
          this.svc.shareLocalFile(ret.titulo,ret.conteudo)
//          window.open(ret.link,'_system');
      });


      this.docSvc
      .Get({
        token: this.db.app.token,
        id: idDocumento,
        tipoRetorno: 1,
      })
      .subscribe((ret) => {
//        this.svc.fileWrite(ret.titulo,ret.conteudo)
//        if (this.plt.is("capacitor")) {
          //this.db.setMensagem('Implementando...')
          //Browser.open({ url: ret.link });
/*          this.service
            .downloadAndOpenFile(data.link, data.titulo)
            .then(() => {
              loading.dismiss();
              this.documentos_filter = undefined;
            })
            .catch(() => {
              loading.dismiss();
              this.documentos_filter = undefined;
            });*/
    //        } else {
    //  console.log('antes browser:', JSON.stringify(ret));
    //        window.open(ret.link);
    //      }
    //});

    //} else {

    /*  /// Teste salvando localmente
      this.docSvc
      .Get({
        token: this.db.app.token,
        id: idDocumento,
        tipoRetorno: 1,
      }).subscribe(ret=>{
        this.svc.fileWrite(ret.nomeArquivo,ret.conteudo);
      });
    }*/

    ////// rafa
    this.docSvc
      .Get({
        token: this.db.app.token,
        id: idDocumento,
        tipoRetorno: 2,
      })
      .subscribe((ret) => {
        Browser.open({ url: ret.link });
        //        console.log(ret.link);
        //window.open(ret.link)
      });
  }


  /*

    this.service.call_api('TsmDocumentoCliente/Get', data).then((data: any) => {
      if (data.status == 'true') {
//        if(documento != undefined) documento.lido = 1;
        // if (this.plt.is('cordova')) {
        let browser;
        if(this.plt.is('cordova')) {
          // const browser = this.iab.create(data.link);
          // browser.show();
          this.service.downloadAndOpenFile(data.link, data.titulo).then(() => {
            loading.dismiss();
            this.documentos_filter = undefined;
          }).catch(() => {
            loading.dismiss();
            this.documentos_filter = undefined;
          });
        } else  {
          // browser = this.iab.create(data.link, '_system');
          // browser.show();
          window.open(data.link, '_blank');
        }


        // } else {
        //   var a = document.createElement("a");
        //   a.target = "_blank";
        //   a.href = data.link;
        //   a.click();
        // }
      } else {
        this.toastCtrl.create({ message: "Não foi possível abrir o documento, tente novamente mais tarde", duration: 4000, position: "center" }).present()
      }
      loading.dismiss()
      this.documentos_filter = undefined;
    }, (e) => {
      loading.dismiss()
      this.toastCtrl.create({ message: "Não foi possível abrir o documento, tente novamente mais tarde", duration: 4000, position: "center" }).present()
      this.documentos_filter = undefined;
    });
    */
}
//}
