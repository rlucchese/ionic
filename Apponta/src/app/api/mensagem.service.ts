import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviaMensagemRequest, EnviaMensagemResponse, GetContatoRequest, GetContatoResponse, GetMensagemRequest, GetMensagemResponse, SetLidaRequest } from '../interface/reval';
import { ApiRequest, ApiResponse, WsProccedService } from './ws-reval.service';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  protected _MODULO = 'Mensagem';

  constructor(private svc: WsProccedService)  { }


GetContato(params: GetContatoRequest): Observable<GetContatoResponse> {

  return this.svc.consomeWS(this._MODULO, 'ContatoLista', params)

}
GetMensagem(params: GetMensagemRequest): Observable<GetMensagemResponse> {
  //    params.action = 'definition'    //lista definicao
  // params.id = 37     //apenas usuario 1
  //   
  //params.action="listRelation"
  //params.
  return this.svc.consomeWS(this._MODULO, 'GetMensagens', params)
}

EnviaMensagem(params: EnviaMensagemRequest): Observable<EnviaMensagemResponse> {

  return this.svc.consomeWS(this._MODULO, 'EnviaMensagem', params)
}
SetLida(params: SetLidaRequest): Observable<ApiResponse> {
  return this.svc.consomeWS(this._MODULO, 'MensagemSetLida', params)
}
}