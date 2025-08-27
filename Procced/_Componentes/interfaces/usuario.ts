import { ApiResponse, ApiRequest } from './api';

export interface ColaboradorArquivo {
  token: string,
  nome: string,
}

export interface ColaboradorDocumento {
  documento: string,
  quantiadeDocumentos: number,
  arquivos: ColaboradorArquivo[]
}

export interface ColaboradorLogDocumento {
  id: number
  ultimoAcessoStr: string
  cliente: string
  documento: string
  nome: string
  dataPublicacao: string
  outrosAcessos: string[]
  ativo: string
}

export interface ColaboradorCliente {
idCliente: number,
nome: string,
quantidadeDocumentos: number,
documentos: ColaboradorDocumento[]
}

export interface Divisao {
  id: number
  descricao: string
}

export interface Servico {
  id: number
  descricao: string
}

export interface Cliente {
  id: number
  nome: string
  documento: string
}

export interface DocumentoColaborador {
  nome: string
  id: string
}

export interface Colaborador {
  CPF: string
  Nome: string
  Admissao: Date
  Nascimento: Date
  email: string
  celular: string
  senhaProvisoria: string
  PossuiSenhaProvisoria: string
  Liberado: string,
  nascimentoStr: string,
  admissaoStr: string,
  UltimoAcessao: Date,
  ultimoAcessoStr: string
  PossuiSenha: string
}

export interface  App {
    token: string
    id?:	number
    tipoUsuario?: number
    endereco?:	string
    dscr?:	string
    cmpl?:	string
    descritivo?:	string
    cFonte?:	string
    cFundo?:	string
    logo?:	string
    categoria?: number
    urlUpload?:	string
    registraAcessoDocumento?: boolean
    nome?: string
    cpf?: string
  }
  

  export interface Usuario {
    usuario: string
    tokenApps: App[]
  }

  export interface GetConfiguracaoResponse {
    urlLogo: string
    urlWhatsapp: string
    corPrimaria: string
    corSecundaria: string
    urlAppleStore: string
    urlGooglePlay: string
    itensMenu:[]
    paginaInicial: string
  }

  export interface GetTokenRequest {
    usuario?: string
    senha?: string
    platform?: number
    token?: string
    player_id?: string
    tipoUsuario?: number
  }
  export interface GetTokenColaboradorRequest {
    cpf?: string
    senha?: string
    nascimento?: string
    novaSenha?: string
    platform?: number
    token?: string
    player_id?: string
  }

  export interface GetTokenResponse extends ApiResponse {
    tokenApps?: App[]
    token?: string
  }

  export interface GetConfiguracaoResponse extends ApiResponse {

  }



  export interface ResetaSenhaRequest {
    usuario: string
    metodo: string
  }

  export interface AlteraSenhaRequest extends ApiRequest {
    novaSenha: string
  }

  export interface GetClientesResponse extends ApiResponse {
    clientes: Cliente[]
  }

  export interface GetDivisoesRequest extends ApiRequest {
    idCliente: number
  }

  export interface GetServicosRequest extends ApiRequest {
    idTipoMob: number,
    idCliente?: number,
  }

  export interface GetDivisoesResponse extends ApiResponse {
    divisoes: Divisao[]
  }

  export interface GetServicosResponse extends ApiResponse {
    servicos: Servico[]
  }

  export interface GetColaboradoresRequest extends ApiRequest {
    idCliente: number
  }

  export interface GetColaboradoresResponse extends ApiResponse {
    colaboradores: Colaborador[]
  }

  export interface LiberaColaboradorRequest extends ApiRequest {
    idCliente: number
    cpf: string
    liberado: boolean
    senhaProvisoria?: string
    celular?: string
    email?: string
  }
  export interface GetLogColaboradorRequest extends ApiRequest {
    idCliente: number
    cpf: string
  }
  export interface GetLogColaboradorResponse extends ApiResponse {
    documentos: ColaboradorLogDocumento[]
  }

  export interface GetLiberacaoColaboradorResponse extends ApiResponse {
    liberacaoColaborador: string
  }

  export interface GetDocumentosColaboradorRequest extends ApiRequest {
    cpf: string,
    idCliente?: number,
  }

  export interface GetDdocumentosColaboradorResponse extends ApiResponse {
    quantidadeDocumentos: number,
    clientes: ColaboradorCliente[]
  }

  export interface GetDocumentoColaboradorRequest extends ApiRequest {
    tokenDocumento: string,
    tipoRetorno?: number
  }

  export interface GetDocumentoColaboradorResponse extends ApiResponse {
    link: string,
    titulo: string,
    conteudo: string
  }
  
  export interface Recurso {
    id: string
    classificacao: string
    descricao: string
    cFonte?: string
    cFundo?: string
  }

  export interface GetRecursosResponse extends ApiResponse {
    recursos: Recurso[]
  }