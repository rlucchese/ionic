import { Documento } from './documento-cliente';
import { ApiRequest, ApiResponse } from "../api/ws-procced.service";
import { OrdemServico } from './ordem-servico';

export interface Notificacoes {
        id: number
        dataHora: Date
        cliente: string
        notificacao: string
        vencimento: Date
        servico: string
        idServico: number
        visualizadaEm?: Date
        baixadaEm?
}

export interface ListaRequest extends ApiRequest {
        status: number
        versao?: number
        apenasQuantidade?: string
        idCliente?: number
        tipoUsuario?: number
  }

export interface ListaResponse extends ApiResponse {
    quantidade?: number
    notificacoes?: Notificacoes[]
    documentos?: Documento[]
    solicitacoes?: OrdemServico[]
}

export interface SetVisualizadaRequest extends ApiRequest {
    id: number
}

export interface SetBaixadaRequest extends ApiRequest {
    id: number
}

export interface GetNoticiasResponse extends ApiResponse {
    noticias: Noticias
}

export interface EnviaConsutaRequest {
    email: string,
    mensagem?: string,
    receberEmail?: boolean
}

export interface Noticias{ 
    id: number,
    dataHora: Date;
    dataHoraStr:String,
    titulo:String,
    texto?:String,
    urlImagem:String,
    mostra?: boolean 
}








