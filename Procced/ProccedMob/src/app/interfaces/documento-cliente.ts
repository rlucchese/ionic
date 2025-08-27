import { ApiRequest, ApiResponse } from './../api/ws-procced.service';

export interface Documento {
  id: number
  Ordem?: number
  titulo: string
  cliente?: string
  dataHora?: Date
  vencimento?: string
  vcto?: Date
  tituloDoc?: string
  vencimentoDoc?: Date
  vctoApp?: Date
  dataHoraUltimoAcesso?: Date
  usuarioUltimoAcesso?: string
  sequencial?: number
  lido?: number
  nomeArquivo?: string
  link?:string
  anexo1?: string
  anexo2?: string
  anexo3?: string
  anexo4?: string
}

export interface Classificacao {
    idClassificacao: number
    classificacao: number
    descricao: string
    qtdDoc: number
    nivel?: number
}

export interface DocumentoCliente {
    id: number
    nomeArquivo: string
    titulo: string
    vencimento?: Date
    idCliente: number
    idDivisao?: number
    idClassificacao: number
    idOrdemServico?: number
    conteudo?: string
    link?: string   
}

export interface ListaClassificacoesRequest extends ApiRequest {
    idCliente: number
    idDivisao?: number
    versao?: number
}

export interface ListaClassificacoesResponse extends ApiResponse {
  classificacoes: Classificacao[]
  classificacoesCliente: Classificacao[]
}

export interface ListaRequest extends ApiRequest {
    idCliente: number
    idClassificacao: number
    idDivisao?: number
    versao?: number
}

export interface ListaResponse extends ApiResponse {
    documentos: Documento[]
}

export interface SetNaoLidoRequest extends ApiRequest {
    id: number
}

export interface GetRequest extends ApiRequest {
    id: number
    tipoRetorno?: number
}

export interface RemoveAcessoClienteRequest extends ApiRequest {
    id: number
}

export interface GetResponse extends ApiResponse {
    id: number
    nomeArquivo: string
    titulo: string
    vencimento: Date
    idCliente: number
    idClassificacao: number
    idDivisao?: number
    link: string
    conteudo: string
}