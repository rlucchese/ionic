import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListaClassificacoesRequest, ListaClassificacoesResponse, ListaResponse, ListaRequest, GetRequest, GetResponse, SetNaoLidoRequest, RemoveAcessoClienteRequest } from '../interfaces/documento-cliente';
import { WsProccedService, ApiResponse } from './ws-procced.service';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { DbService } from '../storage/db.service';


interface ICallback {
  ()
}


@Injectable({
  providedIn: 'root'
})
export class DocumentoclienteService {

  protected _MODULO = 'TsmDocumentoCliente';
  public isLoading: boolean = false;


  constructor(private svc: WsProccedService,
    public plt: Platform,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public httpClient: HttpClient,
    public db: DbService
  ) { }
  // Api
  ListaClassificacoes(params: ListaClassificacoesRequest): Observable<ListaClassificacoesResponse> {
    return this.svc.consomeWS(this._MODULO, 'ListaClassificacoes', params) 
  }

  Lista(params: ListaRequest): Observable<ListaResponse> {
    return this.svc.consomeWS(this._MODULO, 'Lista', params)
  }

  Get(params: GetRequest): Observable<GetResponse> {
    return this.svc.consomeWS(this._MODULO, 'Get', params)
  }

  SetNaoLido(params: SetNaoLidoRequest): Observable<ApiResponse> {
    console.log('setnaolido:', params);
    return this.svc.consomeWS(this._MODULO, 'SetNaoLido', params)
  }

  RemoveAcessoCliente(params: RemoveAcessoClienteRequest) {
    return this.svc.consomeWS(this._MODULO, 'RemoveAcessoCliente', params)
  }
  GetLog(params: any): Observable<any> {
    return this.svc.consomeWS(this._MODULO,'GetLog',params)
  }



  async mostraProcessando() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: "Acessando documento",
        spinner: "crescent",
      })
      .then((ld) => {
        ld.present().then(() => {
          if (!this.isLoading) {
            ld.dismiss();
          }
        });
      });
  }

  async escondeProcessando(msg?: string) {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => {
      //      if (msg) this.setMensagem(msg);
    });
  }

  async setMensagem(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(blob)
  })




  private b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  // Interno
    abreDocumento(token: string, id: any, callback: ICallback, download?: boolean,) {
    this.mostraProcessando();
    if (this.plt.is('android') && this.plt.is('capacitor')) { // only change for iOS
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 1,
      })
        .subscribe((ret) => {
          this.db.renovaToken(ret.novoToken)
          this.svc.fileWrite(ret.titulo, ret.conteudo)
          this.escondeProcessando()
          callback();
        });
    } else if (download) {
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 1,
      })
        .subscribe(async (ret) => {
          this.escondeProcessando()
          if (ret.status == 'true') {
            this.db.renovaToken(ret.novoToken)
            this.salvaArquivo(ret.conteudo, ret.titulo)

            callback();

            /*         console.log(ret)
                     this.svc.fileWrite(ret.titulo, ret.conteudo)
                     this.escondeProcessando()
                     callback();*/
            // window.open('https://leiloeiro.s3-sa-east-1.amazonaws.com/editais/Editais%202021%2009%2001.pdf', 'download')
            //    var file_path = ret.link


            //console.log(FilesystemDirectory.Data,ret.titulo) 

            /*      this.httpClient.get(ret.link, {
                    responseType: 'blob',
                    reportProgress: true,
                    observe: 'events'
                  }).subscribe(
                    async event => {
                      if(event.type === HttpEventType.DownloadProgress) {
          //              this.downloadProgress = Math.round((100 * event.loaded) / event.total)
                      } else if(event.type === HttpEventType.Response) {
          //              this.downloadProgress = 0;
                         const name = 'ARQUIVO.PDF';
                        console.log(event.body)
                        const base64 = await this.convertBlobToBase64(event.body) as string;
          
                         await Filesystem.writeFile({
                           path: name, 
                           data: ret.conteudo,
                           directory: FilesystemDirectory.Documents
                         })
          
                      }
                    }
                  )*/



            //;
          } else {
            this.setMensagem(ret.error);
          }
        })
    } else if (!download)
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 2,
      })
        .subscribe(async (ret) => {
          this.escondeProcessando()
          if (ret.status == 'true') {
//            this.db.renovaToken(ret.novoToken)
//setTimeout(() => {
  //Browser.open({ url: ret.link })
//})
window.location.assign(ret.link) 
            callback();

          } else {
            this.setMensagem(ret.error);
          }
        })
  }


  salvaArquivo(conteudo: string, nomeArq: string) {
    var a: any
    var text = this.b64toBlob(conteudo)
    var data = new Blob([text]);

    a = document.createElement('a')
    a.setAttribute('download', nomeArq)
    a.href = ""
    var url = window.URL.createObjectURL(data);
    a.href = url;

    console.log(a)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

