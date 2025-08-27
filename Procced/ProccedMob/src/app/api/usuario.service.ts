import { ApiResponse, WsProccedService, ApiRequest } from './ws-procced.service';
import { GetTokenRequest, GetTokenResponse, ResetaSenhaRequest, AlteraSenhaRequest, GetClientesResponse, GetDivisoesRequest, GetDivisoesResponse, GetServicosRequest, GetServicosResponse, GetColaboradoresResponse, GetColaboradoresRequest, LiberaColaboradorRequest, GetLiberacaoColaboradorResponse, GetDocumentosColaboradorRequest, GetDdocumentosColaboradorResponse, GetDocumentoColaboradorRequest, GetDocumentoColaboradorResponse, GetTokenColaboradorRequest, GetLogColaboradorRequest, GetLogColaboradorResponse, GetRecursosResponse, GetConfiguracaoResponse } from '../../../../_componentes/interfaces/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { DocumentoclienteService } from './documentocliente.service';

interface ICallback {
  ()
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  protected _MODULO = 'TsmUsuario';

  constructor(private svc: WsProccedService,    ) { }

  GetToken(params: GetTokenRequest):Observable<GetTokenResponse> {
    return this.svc.consomeWS(this._MODULO,'GetToken',params)
  }

  GetConfiguracao():Observable<GetConfiguracaoResponse> {
    return this.svc.consomeWS(this._MODULO,'GetConfiguracao',{})
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

  GetLogColaborador(params: GetLogColaboradorRequest): Observable<GetLogColaboradorResponse> {
    return this.svc.consomeWS(this._MODULO,'GetLogColaborador',params)
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
  SetNaoLidoDocumentoColaborador(params: any): Observable<ApiResponse> {
    console.log('setnaolido:', params);
    return this.svc.consomeWS(this._MODULO, 'SetNaoLidoDocumentoColaborador', params)
  }

  ExcluiDocumentoColaborador(params: any): Observable<ApiResponse> {
   // console.log('setnaolido:', params);
    return this.svc.consomeWS(this._MODULO, 'ExcluiDocumentoColaborador', params)
  }
  ExcluiUsuario(params: any):Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO,'Exclui',params)
  }
  GetRecurso(params: any):Observable<GetRecursosResponse> {
    return this.svc.consomeWS(this._MODULO,'GetRecursos',params)
  }
  SolicitaLogin(params: any): Observable<any> {
    return this.svc.consomeWS(this._MODULO,'SolicitaLogin',params)
  }
}

