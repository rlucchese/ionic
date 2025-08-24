import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequest, ApiResponse, WsProccedService } from './ws-reval.service';
import { IGetCotaRequest, IGetCotaResponse, IGetInstrumentoResponse, IOrdemFabricacao, ISetCotaRequest } from '../interface/cotas';
// Importe os tipos corretos para cotas se existirem, ou ajuste conforme necessário
// import { ListaCotasRequest, ListaCotasResponse, GetCotaRequest, GetCotaResponse } from '../interface/reval';

@Injectable({
  providedIn: 'root'
})
export class CotasService {

  protected _MODULO = 'Producao';
  
  constructor(private svc: WsProccedService) { }

  SetCotas(params:ISetCotaRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'SetCotas', params);
  }

  GetCotas(params: IGetCotaRequest): Observable<IOrdemFabricacao> {
    return this.svc.consomeWS(this._MODULO, 'GetCotas', params);
  }

  GetInstrumentos(params: ApiRequest): Observable<IGetInstrumentoResponse> {
    return this.svc.consomeWS(this._MODULO, 'GetInstrumentos', params);}

  // Adicione outros métodos conforme necessário, seguindo o padrão do documento-fiscal.service
}
