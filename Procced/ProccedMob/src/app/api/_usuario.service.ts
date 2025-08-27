import { ApiResponse, WsProccedService, ApiRequest } from './ws-procced.service';
import { GetTokenRequest, GetTokenResponse, ResetaSenhaRequest, AlteraSenhaRequest, GetClientesResponse, GetDivisoesRequest, GetDivisoesResponse, GetServicosRequest, GetServicosResponse, GetColaboradoresResponse, GetColaboradoresRequest, LiberaColaboradorRequest, GetLiberacaoColaboradorResponse, GetDocumentosColaboradorRequest, GetDdocumentosColaboradorResponse, GetDocumentoColaboradorRequest, GetDocumentoColaboradorResponse, GetTokenColaboradorRequest } from '../../../../_componentes/interfaces/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  protected _MODULO = 'TsmUsuario';

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

  GetClientes(params: ApiRequest): Observable<GetClientesResponse> {
    return this.svc.consomeWS(this._MODULO,'GetClientes',params)
  }

  GetDivisoes(params: GetDivisoesRequest): Observable<GetDivisoesResponse> {
    return this.svc.consomeWS(this._MODULO,'GetDivisoes',params)
  }

  GetServicos(params: GetServicosRequest): Observable<GetServicosResponse> {
    return this.svc.consomeWS(this._MODULO,'GetServicos',params)
  } 

  GetColaboradores(params: GetColaboradoresRequest): Observable<GetColaboradoresResponse> {
    return this.svc.consomeWS(this._MODULO,'GetColaboradores',params)
  }

  LiberaColaborador(params: LiberaColaboradorRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO,'LiberaColaborador',params)
  }

  GetLiberacaoColaborador(params: ApiRequest): Observable<GetLiberacaoColaboradorResponse> {
    return this.svc.consomeWS(this._MODULO,'GetLiberacaoColaborador',params)
  }

  GetDocumentosColaborador(params: GetDocumentosColaboradorRequest): Observable<GetDdocumentosColaboradorResponse> {
    return this.svc.consomeWS(this._MODULO,'GetDocumentosColaborador',params)
  }

  GetDocumentoColaborador(params: GetDocumentoColaboradorRequest): Observable<GetDocumentoColaboradorResponse> {
    return this.svc.consomeWS(this._MODULO,'GetDocumentoColaborador',params)
  } 

  GetTokenColaborador(params: GetTokenColaboradorRequest):Observable<GetTokenResponse> {
    return this.svc.consomeWS(this._MODULO,'GetTokenColaborador',params)
  }
  VinculaDispositivo(params: GetTokenRequest):Observable<GetTokenResponse> {
    return this.svc.consomeWS(this._MODULO,'VinculaDispositivo',params)
  }
  SetNaoLidoColaborador(params: any): Observable<ApiResponse> {
    console.log('setnaolido:', params);
    return this.svc.consomeWS(this._MODULO, 'SetNaoLidoColaborador', params)
  }
}

