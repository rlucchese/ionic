import { IncluiRequest, IncluiResponse, ListaRequest, RequestListaAgenda, ResponseListaAgenda } from './../interfaces/ordem-servico';
import { HttpClient } from '@angular/common/http';
import { WsProccedService } from './ws-procced.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaResponse } from '../interfaces/ordem-servico';

@Injectable({
  providedIn: 'root'
})

export class OrdemServicoService {
 
  protected _MODULO = 'TsmOrdemServico';

  constructor(private svc: WsProccedService,
              private http: HttpClient) { }

  Lista(params: ListaRequest):Observable<ListaResponse>{
//    console.log('os.lista',params)
    return this.svc.consomeWS(this._MODULO,'Lista',params);
  }
  ListaAgenda(params: RequestListaAgenda):Observable<ResponseListaAgenda>{
    //    console.log('os.lista',params)
        return this.svc.consomeWS(this._MODULO,'ListaAgenda',params);
      }

  Get(params) {
    return this.svc.consomeWS(this._MODULO,'Get',params);
  }

  Baixa(params) {
    return this.svc.consomeWS(this._MODULO,'Baixa',params);
  }

  Reagenda(params) {
    return this.svc.consomeWS(this._MODULO,'Reagenda',params);
  }

  Inclui(params): Observable<IncluiResponse> {
    return this.svc.consomeWS(this._MODULO,'Inclui',params);
  }

  GetCamposAuxiliares(params) {
    return this.svc.consomeWS(this._MODULO,'GetCamposAuxiliares',params);
  }

  GetFiltros(params) {
    return this.svc.consomeWS(this._MODULO,'GetFiltros',params);
  }

  PublicaDocumento(params) {
    return this.svc.consomeWS(this._MODULO,'PublicaDocumento',params);
  }
  
  GetDocumentos(params) {
    return this.svc.consomeWS(this._MODULO,'GetDocumentos',params);
  }
  GetBaixas(params) {
    return this.svc.consomeWS(this._MODULO,'GetBaixas',params);
  }
  GetStatus(params) {
    return this.svc.consomeWS(this._MODULO,'GetStatus',params);
  }

}