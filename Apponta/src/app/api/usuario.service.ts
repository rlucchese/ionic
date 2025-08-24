import { ApiResponse, WsProccedService, ApiRequest } from './ws-reval.service';
import { GetTokenRequest, GetTokenResponse, ResetaSenhaRequest, AlteraSenhaRequest, GetClientesResponse, GetDivisoesRequest, GetDivisoesResponse, GetServicosRequest, GetServicosResponse } from '../../../../_componentes/interfaces/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  protected _MODULO = 'Usuario';

  constructor(private svc: WsProccedService) { }

  GetToken(params: GetTokenRequest):Observable<GetTokenResponse> {
    return this.svc.consomeWS(this._MODULO,'GetToken',params)
  }

  ResetaSenha(params: ResetaSenhaRequest):Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO,'ResetaSenha',params)
  }

  AlteraSenha(params: AlteraSenhaRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO,'AlteraSenha',params)
  }

  GetMenu(params: any): Observable<any> {
    return this.svc.consomeWS(this._MODULO,'GetMenu',params)
  }
}
