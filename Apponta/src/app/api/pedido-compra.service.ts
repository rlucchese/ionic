import { Injectable } from '@angular/core';
import { WsProccedService } from './ws-reval.service';
import {  ListaPedidoItensRequest,  ListaPedidoResponse } from '../interface/reval';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoCompraService {

  protected _MODULO = 'PedidoCompra';
  
  constructor(private svc: WsProccedService) { }

  ListaItens(params: ListaPedidoItensRequest): Observable<ListaPedidoResponse> {
    return this.svc.consomeWS(this._MODULO, 'ListaItens', params)
  }


}