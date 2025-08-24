import { ApiRequest, ApiResponse } from "../api/ws-reval.service";

export interface Planta {
	id: number,
	descricao: string
}
export interface Evento {
	id: number,
	descricao: string,
	corFundo?: string,
	corFonte?: string,
}

export interface Operador {
	id: number
	usuario: string
}

export interface Equipamento {

	id: number,
	classificacao: string,
	descricao: string,
	qtdOperacoes?: number
}

export interface EventoProducao {
	id: number,
	classificacao: string,
	descricao: string,
	apenasTitulo?: boolean,
	complementoObrigatorio?:boolean,

}

export interface StatusRecurso {
	idEventoRecurso: number,
	inicio: Date,
	observacaoEvento: string,
	idEventoProducao: number,
	evento: string,
	idAgrupador: number,
	agrupador: string,
	corFundo?: string,
	idAgrupamento?: number,
	agrupamento?: string,
	repeticoesAgrupamento?: number,
	idOperador?: number,
	operador?: string,
	idsProgramacao?: number[]
	arquivoSirene?: string
	sireneVolume?: number
	sireneIntervalo?: number

}
export interface ProgramacaoLiberada {
	tipo: number,
	operacao: string,
	complemento: string,
	complemento2: string,
	idsProgramacao: number[]
	idAgrupamento?: number
	agrupamento?: string
	isChecked?: boolean
}
export interface OperacoesAgrupar {
	id: number
	quantidadeAgrupar: number
}
export interface ProgramacaoFinalizacao {
   id:number,
   quantidadeFabricada?: number,
   quantidadeNaoConforme?: number,
   motivoNaoConforme?: string
}

export interface Programacao {
	id: number
	quantidade: number
	tempoPrevisto?: number
	inicio?: Date
	termino?: Date
	idOrdem: number
	numeroOrdem: string
	quantidadeOrdem: number
	dataOrem: number
	referenciaOrdem: string
	descricaoOrdem: string
	idPedido?: number
	numeroPedido?: string
	entregaPedido?: Date
	idCliente?: number
	cliente?: string
	idAgrupamento?: number
	agrupamento?: string
	quantidadeFabricada?: number
	quantidadeNaoConforme?: number
	motivo?: string
	operacao?: string
}
export interface CentroCusto {
	id: number,
	classificacao: string,
	descricao: string,
	equipamentos: Equipamento[],
	strEquipamentos?: string
}

export interface Operacao {
	id: number,
	idOrdem: number,
	idCentroCusto: number,
	saldoFabricar: number
}


export interface Processo {
	id: number
	descricao: string
	ordem: string
}

export interface ProcessoOrdem {
	idOperacao: number
	quantidade: number
	checked?: boolean
}

export interface OrdemAcompanhamento {
	id: number
	numero: number
	tipo: number
	descricaoTipoOF: string
	data: Date
	quantidade: number
	quantidadeOperacoes: number
	processos: ProcessoOrdem[]
	pedido?: number
	cliente?: number
	entregaPedido?: Date
	duEntregaPedido?: Number
	duDataPedido?: Number
	observacao?: string
	observacaoAnt?: string
	revisarEstrutura?: boolean
	revisarEstruturaAnt?: boolean
	ordemOrigem?: string
	ordemOrigemAnt?: string
	nota?:number
	finalizada?: boolean
	cor?: string
}

export interface OrdemAlterada {
	idOrdem: number
	observacaoAcompanhamento?: string
	revisarEstrutura?: boolean
	ordemOrigem?: string
}

export interface OperacaoAlterar {
	idOrdem: number
	idOperacao: number
	checked: boolean
}

export interface OrdemFabricacao {
	id: number,
	numero: string,
	quantidade: number,
	data: Date,
	referencia: string,
	descricao: string,
	unidade: string,
	idPedido?: number,
	numeroPedido?: string,
	entregaPedido?: number,
	idCliente?: number,
	cliente?: string,
	pesoLiquido?: number,
}
 
export interface OperadorListaResponse extends ApiResponse {
	operadores: Operador[]
}

export interface OperadorListaRequest extends ApiRequest {
	idEquipamento: number
}

export interface GetPlantaResponse extends ApiResponse {
	plantas: Planta[]
}
export interface GetCentroCustoRequest extends ApiRequest {
	idPlanta: number
}

export interface GetCentroCustoResponse extends ApiResponse {
	result: boolean,
	centrosCusto: CentroCusto[]
}

export interface GetOperacaoLiberadaResponse extends ApiResponse {
	quantidade: number,
	operacoes: ProgramacaoLiberada[]
	statusOFIndividual?: number
}

export interface AdicionaOperacaoExtraRequest extends ApiRequest {
	idEquipamento: number,
	ordem: string,
}

export interface GetOperacaoLiberadaRequest extends ApiRequest {
	idEquipamento: number,
	ordem?: string,
	pedido?: string,
	peca?: string,
	agrupamento?: string,
}

export interface GetOperacoesResponse extends ApiResponse {
	quantidade: number,
	operacoes: Programacao[]
}

export interface GetOperacoesRequest extends ApiRequest {
	operacoes: number[],
}

export interface GetEventosProducaoRequest extends ApiRequest {
	idRecurso: number,
	idAgrupador: number
}

export interface GetEventosProducaoResponse extends ApiResponse {
	eventosProducao: EventoProducao[]
}
export interface GetStatusRequest extends ApiRequest {
	idRecurso: number,
	inicio?: Date,
	termino?: Date,
}

export interface GetStatusResponse extends ApiResponse {
	statusRecurso: StatusRecurso
	eventosSetup: Evento[]
	eventosProducao: Evento[]
	eventosParada: Evento[]
	eventosApontados: EventoApontado[]
	eventoAtual: EventoApontado
}
export interface RegistraEventoRequest extends ApiRequest {

idRecurso: number,
idEvento: number,
idAgrupadorEvento?: number,
idAgrupamento?: number,
idsProgramacao?: number[];
observacao?: string
idNovoOperador?: number
}

export interface RegistraEventoResponse extends ApiResponse {
	id: number
	novoToken?: string
	novoUsuario?: string
}

export interface FinalizaOperacaoRequest extends ApiRequest {
	idRecurso: number
	operacoes: ProgramacaoFinalizacao[]
}
export interface GetConfiguracaoResponse extends ApiResponse {
	urlLogo: string
}
export interface AgrupaOperacoesRequest extends ApiRequest {
	descricao: string,
	operacoes: OperacoesAgrupar[],
	quantidadeRepeticoes?: number,
}
export interface AgrupaOperacoesResponse extends ApiResponse {
	idAgrupamento: number	
}

export interface DesagrupaOperacoesRequest extends ApiRequest {
    idAgrupamento: number 
}

export interface AcompanhamentoOrdensRequest extends ApiRequest {
	idAcompanhamento: number
	gerar?: boolean
}

export interface AcompanhamentoOrdensResponse extends ApiResponse {
	geradoEm: Date
	processos: Processo[]
	ordens: OrdemAcompanhamento[]
	pedidosEmAberto: number[]
}

export interface AlteraBaixaOperacoesRequest extends ApiRequest {
	idAcompanhamento: number
	operacoes: OperacaoAlterar[]
}

export interface AlteraOrdemFabricacaoRequest extends ApiRequest {
	ordens: OrdemAlterada[]
}

export interface AlteraCorOrdemFabricacaoRequest extends ApiRequest {
	idOrdem: number
	cor: string
}

export interface Mensagem {
	dataHoraStr: string
	id: string
	equipamento: string
	mensagem: string
	usuarioPostagem: string
	idUsuario: string
	lidaPor: string
	lida:boolean
}

export interface UsuarioMensagem {
	id: number
	usuario: string
	cor: string
}

export interface GetOrdemFabricacaoRequest extends ApiRequest {
	numero: string
}

export interface ResetaCentroCustoRequest extends ApiRequest {
	idCentroCusto: number
}

export interface GetOrdemFabricacaoResponse extends ApiResponse {
	ordem: OrdemFabricacao
}
export interface GetContatoRequest extends ApiRequest {
  apenasQuantidade?: boolean
}

export interface GetMensagemRequest extends ApiRequest {
	idContato?: number;
	idUltimaMensagem?: number
    idPrimeiraMensagem?: number
}
export interface GetMensagemResponse extends ApiResponse {
	mensagens?: Mensagem[]
	usuarios?: UsuarioMensagem[]
	naoLidas?: number

}

export interface GetContatoResponse extends ApiResponse {
	contatos?: Contato[]
	naoLidas?: number
}

export interface EnviaMensagemRequest extends ApiRequest {
	idContato?: number;
	mensagem: string
}

export interface EnviaMensagemResponse extends ApiRequest {
	mensagens: Mensagem[]
}


export interface SetLidaRequest extends ApiRequest {
	idMensagem: string;
}

export interface Contato{
idContato: string
contato: string
ultimaMensagem: string
dhUltimaMensagem: string
dhUltimaMensagemStr: string
naoLidas: string

}
export interface EventoApontado {
	agrupadores: Apontamento[],
	codigoEventoInicio: string,
	inicio: string,
	tempo: number,
	termino: string,

}

export interface Apontamento {
	codigo: string
	tempo: number
	corFonte: string
	corFundo: string

}
export interface Documento {
	referencia: string
	descricao: string
	ordem: string
	codigo: string
	rotulo: string


}
export interface GetDocumentosResponse extends ApiResponse {
	produtos?: ProdutoLinks[]


}
export interface ProdutoLinks {
	codigo: string
	rotulo: string
	links: Link[]


} 

export interface Link {
		codigp: string
		rotulo: string


}

export interface DocumentoFiscal{
	emissao?: Date,
	numero?: number,
	cnpj?: string,
	fornecedor?: string,
	naturezaOperacao?: string
	chaveNFe?: string,
	codigo?: number
	itens?: ItemNotaPedido[],
	codigoFornecedor?: string



}

export interface ItemDocumentoFiscal{
codigo: number,
codigoProdutoServico: number,
referencia: string,
descricao: string,
descricaoProduto: string;
quantidade: number,
valorUnitarioCml: number,
valorTotal: number,
unidade: string,
CFOP: string,
item: number, 
quantidadePedidoCompra: number
numer: string;
itemPedidoCompra: number;
observacao: string;
quantidadeCml: number;
referenciaProduto: string;
unidadeCml: string;
situacao?: number;
}

export interface ItemNotaPedido{
notaItem: number;
notaReferencia: string;
notaDescricao: string;
notaQuantidade: string;
notaUnidade: string;
notaValorUnitario: number;
notaPedidoNumero: string;
notaPedidoItem: string;
pedidoNumero: string;
pedidoCodigo: number;
pedidoUnidade: string;
pedidoQuantidade: number;
pedidoValorUnitario: number;
entradaReferencia: string;
entradaDescricao: string;
entradaUnidade: string;
entradaQuantidade: string;
entradaValorUnitario: number;
observacao: string;
notaProduto: string;
cor: string;

}


export interface GetDocumentosRequest extends ApiRequest {
	tabela?: string
	referencia?: string
	descricao?: string

}


export interface GetDocumentoRequest extends ApiRequest {
	codigoDocumento: number	

}

export interface ListaRequest extends ApiRequest {
	filter: string	

}

export interface ListaResponse extends ApiResponse {
	documentos: DocumentoFiscal[]	

}

export interface AplicarPedidoRequest extends ApiRequest {
	pedidoCompra: string	
	cnpj: string
	itens: ItemNotaPedido[]
}

export interface AplicarPedidoResponse extends ApiResponse {
	itens: ItemNotaPedido[]	

}


export interface GetRequest extends ApiRequest {
	codigo: number	

}

export interface GetResponse extends ApiResponse {
	itens: ItemNotaPedido[]	

}

export interface ValidaResponse extends ApiResponse {
	item: ItemNotaPedido

}
export interface ListaPedidoItensRequest extends ApiRequest {
	numero?: string	
	item?: string
	cnpj: string
	

}

export interface ListaProdutoRequest extends ApiRequest {
	filter: string	

}

export interface ListaPedidoResponse extends ApiResponse {
	itens: any[]	

}
export interface ListaProdutoResponse extends ApiResponse {
	produtos: any[]

}

export interface GetPedidoRequest extends ApiRequest {
	filter: string	

}

export interface GetPedidoResponse extends ApiResponse {
	pedido: ItemPedido[]

}

export interface ItemPedido{
	numeroPedido: string
	codigoItem: string
	descricao: string
	quantidade: string
	referencia: string

}