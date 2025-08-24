import { ApiResponse, ApiRequest } from './ws-grape.service';
import { GetTokenRequest, GetTokenResponse, ResetaSenhaRequest, AlteraSenhaRequest, GetClientesResponse, GetDivisoesRequest, GetDivisoesResponse, GetServicosRequest, GetServicosResponse } from '../../../../_componentes/interfaces/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WsGrapeService } from './ws-grape.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  protected _MODULO = 'Usuario';

  constructor(private svc: WsGrapeService) { }

  GetToken(params: GetTokenRequest):Observable<GetTokenResponse> {
    return this.svc.consomeWS(this._MODULO,'GetToken.php',params)
  }

  ResetaSenha(params: ResetaSenhaRequest):Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO,'ResetaSenha',params)
  }

  AlteraSenha(params: AlteraSenhaRequest): Observable<ApiResponse> {
    console.log(this._MODULO)
    console.log(params)
    return this.svc.consomeWS(this._MODULO,'AlteraSenha',params)
  }

  ExcluiUsuario(params: any):Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO,'ExcluiUsuario',params)
  }
}
