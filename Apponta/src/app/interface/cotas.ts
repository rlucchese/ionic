import { ApiRequest, ApiResponse } from "../api/ws-reval.service";

export interface IInstrumento {
  codigo: Number;
  descricao: string;
  referencia: string;
}
export interface IResultado {
    medida: number;}


export interface ICota {
  descricao?: string;
  resultados?: IResultado[];
  instrumento?: IInstrumento;
  medidaMinima: number;
  medidaMaxima: number;
  quantidadeMinimaResultados: number;
  codigo?: number;
}

export interface IPeca {
  cotas: ICota[];
  referencia: string;
  descricao: string;
  codigo: string;
  peca: number
}

export interface IOrdemFabricacao {
  status: boolean
  pecas: IPeca[];
  numero: string
  descricao: string;
  codigoOrdem: number;
  pecasMedir: number;
  error?: string;
}

export interface IGetCotaRequest extends ApiRequest {
  numeroOrdem: string;
}

export interface ISetCotaRequest extends ApiRequest {
  ordem: IOrdemFabricacao;
}

export interface IGetCotaResponse extends ApiResponse{
  ordem: IOrdemFabricacao;}

export interface IGetInstrumentoResponse extends ApiResponse {
  instrumentos: IInstrumento[];}

