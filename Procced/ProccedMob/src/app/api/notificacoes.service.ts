import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../api/ws-procced.service';
import { EnviaConsutaRequest, GetNoticiasResponse, ListaRequest, ListaResponse, SetVisualizadaRequest } from '../interfaces/notificacoes';
import { WsProccedService } from './ws-procced.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {
  protected _MODULO = 'TsmNotificacao';

  constructor(private svc: WsProccedService) { }
    
  Lista(params: ListaRequest):Observable<ListaResponse>{
      return this.svc.consomeWS(this._MODULO,'Lista',params);    
  }

  SetVisualizada(params: SetVisualizadaRequest):Observable<ApiResponse>{
    return this.svc.consomeWS(this._MODULO,'SetVisualizada',params);    
  }
  SetBaixada(params: SetVisualizadaRequest):Observable<ApiResponse>{
    return this.svc.consomeWS(this._MODULO,'SetVisualizada',params);    
  }

  GetNoticias():Observable<GetNoticiasResponse>{
    return this.svc.consomeWS(this._MODULO,'GetNoticias',{});    
  }

  EnviaConsulta(params: EnviaConsutaRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO,'EnviaConsulta',params);    
  }
}
