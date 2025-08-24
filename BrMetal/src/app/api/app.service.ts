import { GenericoRequest, GenericoResponse, GetConfiguracaoResponse, GetMensagemRequest, GetMensagemResponse, PersisteRequest, PersisteResponse } from '../interface/brMetal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequest, WsGrapeService } from './ws-grape.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  protected _MODULO = 'App';
  
  constructor(private svc: WsGrapeService) { }

  GetConfiguracoes():Observable<GetConfiguracaoResponse> {
    return this.svc.consomeWS(this._MODULO,'GetConfiguracoes',{})
  }
  GetObjeto(objeto:string,params: GenericoRequest):Observable<GenericoResponse> {
   // params.action = 'definition'    //lista definicao
  //  params.id = 37     //apenas usuario 1
//   
//params.action="listRelation"
//params.
    return this.svc.consomeWS(this._MODULO,objeto,params)
  }

  Persiste(params: PersisteRequest):Observable<PersisteResponse> {

     return this.svc.consomeWS(this._MODULO,'Persist',params)
   }
 
   GravaLog(params: any):Observable<any> {

    return this.svc.consomeWS(this._MODULO,'GravaLog',params)
  }

  
}
