import { GetProdutoRequest, IncluiPedidoRequest, PedidoResponse, Produto, ProdutosResponse } from './../interface/brMetal';
import { ApiResponse, ApiRequest } from './ws-grape.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WsGrapeService } from './ws-grape.service';
import { Cliente, ClienteResponse, GetClienteRequest } from '../interface/brMetal';

@Injectable({
  providedIn: 'root'
})
export class VendasService { 

  protected _MODULO = 'Vendas';

  constructor(private svc: WsGrapeService) { }

  ListaClientes(params: ApiRequest):Observable<ClienteResponse> {
    return this.svc.consomeWS(this._MODULO,'ListaClientes',params)
  }

  GetCliente(params: GetClienteRequest):Observable<Cliente> {
    return this.svc.consomeWS(this._MODULO,'GetCliente',params)
  }

  GetProduto(params: GetProdutoRequest):Observable<Produto> {
    return this.svc.consomeWS(this._MODULO,'GetProduto',params)
  }

  ListaProdutos(params: ApiRequest):Observable<ProdutosResponse> {
    return this.svc.consomeWS(this._MODULO,'ListaProdutos',params)
  }
  IncluiPedido(params: IncluiPedidoRequest):Observable<PedidoResponse> {
    return this.svc.consomeWS(this._MODULO,'IncluiPedido',params)
  }

  Valida(params: any):Observable<any> {
    return this.svc.consomeWS(this._MODULO,'_Validations',params)
  }


}
