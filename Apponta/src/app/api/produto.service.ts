import { Injectable } from '@angular/core';
import { WsProccedService } from './ws-reval.service';
import {  ListaPedidoItensRequest,  ListaPedidoResponse, ListaProdutoRequest, ListaProdutoResponse } from '../interface/reval';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  protected _MODULO = 'ProdutoServico';
  
  constructor(private svc: WsProccedService) { }

  Lista(params: ListaProdutoRequest): Observable<ListaProdutoResponse> {
    return this.svc.consomeWS(this._MODULO, 'Lista', params)
  }


}