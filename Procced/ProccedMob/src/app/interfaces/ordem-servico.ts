
import { ApiRequest, ApiResponse } from "../api/ws-procced.service";
import { Documento } from './documento-cliente';

const _STATUS_OS = [
  { id: 1, dsc: 'Não baixadas' },
  { id: 2, dsc: 'Baixadas' },
  { id: 3, dsc: 'Todas' },
]

export class DocumentoResumido {
  id: number;
  nome: string;
}
export class Atividade {
  id: number;
  checkList: number;
  percConcl: number;
  classificacao: string;
  descricao: string;
  txtExpl: string;
  idRecurso: number;
  recurso: string;
  dataAgenda: Date;
  atividades?: Atividade[];
  checked?: boolean
}
export class CampoAuxiliar {
  id: string;
  conteudo?: string;
  rotulo: string;
  tipo: number;
  tamanho?: number;
  decimais?: number;
  obrigatorio?: number;
  itens?: string;
  itemPadrao?: number;
  objLeitura: number;
  mascara?: string;
  tipoValidacao?: number;
  dependencia?: string;
}

export interface OpcaoFiltro {
  id: number,
  rotulo: String,
}

export interface OrdemServico {
  id: number
  ordemServico: string
  idTipoMob: number
  descricao: string
  data: Date
  dataAgenda: Date
  statusOS: string
  observacao?: string
  tipo: string
  cliente: string
  divisao?: string
  servico: string
  idServico: BigInteger
  tags?: String[]
  usuarioCriacao: string
  finalizada: boolean
  camposAuxiliares?: CampoAuxiliar[]
  atividades?: Atividade[]
  documentos?: DocumentoResumido[]
  mostraDocumentos?: boolean
  qtdDocumentos?: number
  documento?: Documento[]
  mostraCamposAuxiliares?: boolean
  qtdCamposAuxiliares?: number
  strCamposAuxiliares?: string
 observacaoBaixa?: string
 dataBaixa?: string
 horaIni?: string
 horaFim?: string
 intervalo?: string
 totalHoras?: string
 codigoCliente?: string
 baixas?:any[]

}

// Lista
export interface ListaRequest extends ApiRequest {
  idTipoMob?: number
  idRecurso?: number
  idCliente?: number
  idDivisao?: number
  idServico?: number
  idOrdemServico?: number
  idStatus?: number
  mostrarBaixadas?: number
  tipoMob?: number
  versao?: number
}
export interface ListaResponse extends ApiResponse {
  ordens: OrdemServico[]
}

export interface GetCamposAuxiliaresRequest extends ApiRequest {
  idServico: number
  idCliente?: number
  idOrdem?: number
}

export interface GetCamposAuxiliaresResponse extends ApiResponse {
  camposAuxiliares: CampoAuxiliar[]
}

export interface GetDocumentosRequest extends ApiRequest {
  idOrdem: number
}

export interface GetDocumentosResponse extends ApiResponse {
  documentos: DocumentoResumido[]
}
// Get
export interface GetRequest extends ApiRequest {
  id: number
}
export interface GetResponse extends ApiResponse {
  camposAuxiliares: void;
}

export interface IncluiRequest extends ApiRequest {
  idTipoMob: number
  data?: Date
  idCliente: number
  idDivisao?: number
  idServico: number
  descricao: string
  idRecurso: number
  observacao?: string
  tags: string;
  camposAuxiliares?: CampoAuxiliar[]
}

export interface IncluiResponse extends ApiResponse {
  id?: number
}

export interface OrdemServicoAgenda {
  id: number,
  data?: Date,
  inicio?: Date,
  termino?: Date,
  cliente?: string,
  servico?: string,
  status?: string,
  corFundo?: string
  observacao?: string
  dias?: number
  aguardando?: string
  percentualBaixados?: string
  atividades?: string
  tags?: string
  checked?: boolean
}

export interface RequestListaAgenda extends ApiRequest{
   idRecurso: number
  cliente?: string
  servico?: string
  ordem?: number
  dataInicial?: Date
  dataFinal?: Date
  dataBaixa?: Date
  baixados?: boolean
  aguardando?: boolean
  idStatus?: number
  observacao?: string
  campoAuxilair?: string
  tag?: string 
}

export interface ResponseListaAgenda extends ApiResponse 
{
  podeExcluir: boolean
  ordens:  OrdemServicoAgenda[]
}
