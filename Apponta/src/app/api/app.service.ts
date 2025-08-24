import { GetConfiguracaoResponse, GetDocumentoRequest, GetDocumentosRequest, GetDocumentosResponse } from './../interface/reval';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequest, WsProccedService } from './ws-reval.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  protected _MODULO = 'App';
  
  constructor(private svc: WsProccedService) { }

  GetConfiguracoes():Observable<GetConfiguracaoResponse> {
    return this.svc.consomeWS(this._MODULO,'GetConfiguracoes',{'id':'123'});
  }

  GetDocumentos(params: GetDocumentosRequest): Observable<GetDocumentosResponse> {
    return this.svc.consomeWS(this._MODULO, 'GetDocumentos', params)
  }
  GetDocumento(params: GetDocumentoRequest): Observable<any> {
    return this.svc.consomeWS(this._MODULO, 'GetDocumento', params)
  }
}
