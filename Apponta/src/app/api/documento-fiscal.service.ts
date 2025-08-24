import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WsProccedService } from './ws-reval.service';
import { AplicarPedidoRequest, AplicarPedidoResponse, GetRequest, GetResponse, ListaRequest, ListaResponse, ValidaResponse } from '../interface/reval';

@Injectable({
  providedIn: 'root'
})
export class DocumentoFiscalService {

  protected _MODULO = 'DocumentoFiscal';
  
  constructor(private svc: WsProccedService) { }

  Lista(params: ListaRequest): Observable<ListaResponse> {
    return this.svc.consomeWS(this._MODULO, 'Lista', params)
  }

  AplicarPedido(params: AplicarPedidoRequest): Observable<AplicarPedidoResponse> {
    return this.svc.consomeWS(this._MODULO,'AplicarPedido',params)
  }

  Get(params: GetRequest): Observable<GetResponse> {
    return this.svc.consomeWS(this._MODULO, 'Get', params)
  }
  Finaliza(params: any): Observable<any> {
    return this.svc.consomeWS(this._MODULO, 'Finaliza', params)
  }
  ValidaItem(params: any): Observable<ValidaResponse> {
    return this.svc.consomeWS(this._MODULO, 'ValidaItem', params)
  }

}
