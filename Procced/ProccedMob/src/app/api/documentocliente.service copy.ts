import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListaClassificacoesRequest, ListaClassificacoesResponse, ListaResponse, ListaRequest, GetRequest, GetResponse, SetNaoLidoRequest, RemoveAcessoClienteRequest } from '../interfaces/documento-cliente';
import { WsProccedService, ApiResponse } from './ws-procced.service';
import { Plugins } from '@capacitor/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
const { Browser } = Plugins;

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
    public toastController: ToastController) { }
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
    console.log('setnaolido:',params);
    return this.svc.consomeWS(this._MODULO, 'SetNaoLido', params)
  }

  RemoveAcessoCliente(params: RemoveAcessoClienteRequest) {
    return this.svc.consomeWS(this._MODULO, 'RemoveAcessoCliente', params)
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

  // Interno
  abreDocumento(token: string, id: number, callback: ICallback) {
    this.mostraProcessando();
    if (this.plt.is('android')) { // only change for iOS
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 1,
      })
        .subscribe((ret) => {
          console.log(ret)
          this.svc.fileWrite(ret.titulo, ret.conteudo)
          this.escondeProcessando()
          callback();
        });
    } else {
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 2,
      })
        .subscribe((ret) => {
          this.escondeProcessando()
          if(ret.status=='true') {
            setTimeout(() => {
              Browser.open({ url: ret.link })
            })
                        callback();
          } else {
            this.setMensagem(ret.error);
          }
        });
    }
  }

}

