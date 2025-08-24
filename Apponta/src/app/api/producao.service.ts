import { AcompanhamentoOrdensRequest, AcompanhamentoOrdensResponse, AdicionaOperacaoExtraRequest, AgrupaOperacoesRequest, AgrupaOperacoesResponse, AlteraBaixaOperacoesRequest, AlteraCorOrdemFabricacaoRequest, AlteraOrdemFabricacaoRequest, DesagrupaOperacoesRequest, EnviaMensagemRequest, GetContatoResponse, GetMensagemRequest, GetMensagemResponse, GetOrdemFabricacaoRequest, GetOrdemFabricacaoResponse, OperadorListaRequest, OperadorListaResponse, ResetaCentroCustoRequest, SetLidaRequest } from './../interface/reval';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../_componentes/interfaces/api';
import { FinalizaOperacaoRequest, GetCentroCustoRequest, GetCentroCustoResponse, GetEventosProducaoRequest, GetEventosProducaoResponse, GetOperacaoLiberadaRequest, GetOperacaoLiberadaResponse, GetOperacoesRequest, GetOperacoesResponse, GetPlantaResponse, GetStatusRequest, GetStatusResponse, RegistraEventoRequest, RegistraEventoResponse } from '../interface/reval';
import { ApiRequest, WsProccedService } from './ws-reval.service';

@Injectable({
  providedIn: 'root'
})
export class ProducaoService {

  protected _MODULO = 'Producao';

  constructor(private svc: WsProccedService) { }

  TrocaOperadorLista(params: OperadorListaRequest): Observable<OperadorListaResponse> {
    return this.svc.consomeWS(this._MODULO, 'TrocaOperadorLista', params)
  }

  PlantaLista(params: ApiRequest): Observable<GetPlantaResponse> {
    return this.svc.consomeWS(this._MODULO, 'PlantaLista', params)
  }

  CentroCustoLista(params: GetCentroCustoRequest): Observable<GetCentroCustoResponse> {
    return this.svc.consomeWS(this._MODULO, 'CentroCustoLista', params)
  }

  AdicionaOperacaoExtra(params: AdicionaOperacaoExtraRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'AdicionaOperacaoExtra', params)
  }

  GetOperacoesLiberadas(params: GetOperacaoLiberadaRequest): Observable<GetOperacaoLiberadaResponse> {
    return this.svc.consomeWS(this._MODULO, 'GetOperacoesLiberadas', params)
  }
  GetOperacoes(params: GetOperacoesRequest): Observable<GetOperacoesResponse> {
    let ret = this.svc.consomeWS(this._MODULO, 'GetOperacoes', params)
console.log(ret)
return ret
  }
  GetEventosProducao(params: GetEventosProducaoRequest): Observable<GetEventosProducaoResponse> {
    return this.svc.consomeWS(this._MODULO, 'GetEventosProducao', params)
  }

  GetStatus(params: GetStatusRequest): Observable<GetStatusResponse> {
    return this.svc.consomeWS(this._MODULO, 'GetStatus', params)
  }
  RegistraEvento(params: RegistraEventoRequest): Observable<RegistraEventoResponse> {
    console.log('RegistraEvento - Params', params)

//    let ret: any
//    return ret
    return this.svc.consomeWS(this._MODULO, 'RegistraEvento', params)
  }

  FinalizaOperacao(params: FinalizaOperacaoRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'FinalizaOperacao', params)
  }

  AgrupaOperacoes(params: AgrupaOperacoesRequest): Observable<AgrupaOperacoesResponse> {
    return this.svc.consomeWS(this._MODULO, 'AgrupaOperacoes', params)
  }

  DesagrupaOperacoes(params: DesagrupaOperacoesRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'DesagrupaOperacoes', params)
  }

  AcompanhamentoOrdens(params: AcompanhamentoOrdensRequest): Observable<AcompanhamentoOrdensResponse> {
    return this.svc.consomeWS(this._MODULO, 'AcompanhamentoOrdens', params)
  }

  AlteraBaixaOperacoes(params: AlteraBaixaOperacoesRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'AlteraBaixaOperacoes', params)
  }

  AlteraOrdemFabricacao(params: AlteraOrdemFabricacaoRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'AlteraOrdemFabricacao', params)
  }

  AlteraCorOrdemFabricacao(params: AlteraCorOrdemFabricacaoRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'AlteraCorOrdemFabricacao', params)
  }

  // Rafa

  GetMensagem(params: GetMensagemRequest): Observable<GetMensagemResponse> {
    //    params.action = 'definition'    //lista definicao
    // params.id = 37     //apenas usuario 1
    //   
    //params.action="listRelation"
    //params.
    return this.svc.consomeWS(this._MODULO, 'GetMensagens', params)
  }



  GetOrdemFabricacao(params: GetOrdemFabricacaoRequest): Observable<GetOrdemFabricacaoResponse> {
    console.log(params)
    return this.svc.consomeWS(this._MODULO, 'GetOrdemFabricacao', params)
  }

  ImprimeEtiqueta(params) {
    return this.svc.consomeWSAntigo('TsmServicos','EtiquetaOrdemFabricacao',params)
  }

  ResetaCentroCusto(params: ResetaCentroCustoRequest): Observable<ApiResponse> {
    return this.svc.consomeWS(this._MODULO, 'ResetaCentroCusto', params)
  }


  
}
