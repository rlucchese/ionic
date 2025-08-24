import { ApiRequest, ApiResponse } from "../api/ws-grape.service";

export interface GetConfiguracaoResponse extends ApiResponse {
	urlLogo: string
}
export interface GetClienteRequest extends ApiRequest {
	codigo: number
}
export interface GetProdutoRequest extends ApiRequest {
	referencia?: string
	codigo?: number
}

export interface ClienteResponse extends ApiResponse {
	clientes?: Cliente[]
}

export interface ProdutosResponse extends ApiResponse {
	produtos?: Produto[]
}
export interface Cliente {
	codigo?: number
	nome?: string
	cnpjcpf?: string
	nomeFantasia?: string
	contato?: string
	ie?: string
	cidade?: string
	estado?: string
	endereco?: string
	bairro?: string
	email?: string
	telefone?: string
	cep?: string
	inscricaoEstadual?: string
	uf?: string
	enderecosEletronicos?: string
	observacao?: string

}
export interface Produto {
	codigo?: number
	referencia?: string
	descricao?: string
	quantidade?: number
	unidade?: string
	estoqueDisponivel?: number
	valorUnitario?: number
	valorTotal?: number
	observacao?: string
	selected?: boolean
	ok?: boolean

}

export interface Item {
	codigo?: number
	quantidade?: number
	valorUnitario?: number
	valorTotal?: number
	observacao?: string
selected?: boolean
}

export interface IncluiPedidoRequest extends ApiRequest {
	cliente?: Cliente
	itens?: Item[]
	dadosAuxiliares?:{    condicaoPagamento?: string
		dataEntrega?: string
		observacao?: string,
		entregaImediata?: boolean,
		enviaEmail?: boolean,
		numero?: number,
		dataBaixa?: string,
		naoAprovado?: boolean,
		motivoBaixa?: string,
		observacaoBaixa?: string
		tipoFrete?: string
		transportadora?: string
	}


}

export interface PedidoResponse extends ApiResponse {
	codigoPedido?: number

}
export interface Field {
	decimais?: number
	campo?: string
	rotulo?: string
	tamanho?: number
	obrigatorio?: boolean
	mask?: string

}
export interface Relation {
	type: string
	otherGrape: string
	mineField: string
}

export interface Action {
	id: string
	label: string

}

export interface Mensagem {
	dataHora: string
	id: string
	equipamento: string
	mensagem: string
	usuarioPostagem: string
	lidaPor: string
	lida:boolean

}

export interface GenericoResponse extends ApiResponse {
	label: string
	labelPlur: string
	fieldsList: Field[]
	fields: Field[]
	actions: Action[]
	relations: Relation[]
	grape?: any
	headers?: any[]
	data?: any
	url?: any
	tokenArquivo?: any
	cliente?: any
	itens?: any
	dadosAuxiliares?: any
	numero?: string
	msg?: string

}

export interface UpdateRequest extends ApiRequest {
	action: string,
	updates: any[]
}

export interface GenericoRequest extends ApiRequest {
	action?: string
	id?: any
	ids?: number[]
	grape?: any
	idHeader?: string
	keysHeader?: string[]
	keyFilter?: string
	filters?: any
	columns?: any[]
	cliente?: any
	itens?: any
	dadosAuxiliares?: any
	referencia?: string
	numero?: string
  dados?:  any
  orcamento?: any

}

export interface PersisteRequest extends ApiRequest {
	action: string,
	key: string,
	id?: string,
	scope?: string,
	object?: any
}

export interface PersisteResponse  extends ApiResponse {
	object?: any
}



export interface GetMensagemRequest extends ApiRequest {
	idEquipamento?: number;
	lidas?: number
}
export interface GetMensagemResponse extends ApiResponse {
	mensagens: Mensagem[];
}
export interface EnviaMensagemRequest extends ApiRequest {
	idEquipamento?: number;
	mensagem: string
}

export interface ItemValidacao{
  codigoProduto: number,
  referencia: string,
  descricao: string,
  qtdOrc: number,
  embalagemCom: number,
  maximoDisponivel: number,
  qtdAjustada: number
  cor?: string
  qtdAjustadaAnt?: number
}



