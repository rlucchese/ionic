import { ApiResponse, ApiRequest } from './api';
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

export interface App {
    token: string
    id:	number
    tipoUsuario: number
    endereco:	string
    dscr:	string
    cmpl:	string
    descritivo:	string
    cFonte:	string
    cFundo:	string
    logo:	string
    categoria: number
    urlUpload:	string
    registraAcessoDocumento?: boolean
  }
  
  export interface Usuario {
    usuario: string
    tokenApps: App[]
  }

  export interface GetTokenRequest {
    usuario?: string
    senha?: string
    token?: string
  }

  export interface GetTokenResponse extends ApiResponse {
    token: string;
  }

  export interface ResetaSenhaRequest {
    usuario: string
    metodo: string
  }

  export interface ResetaSenhaResponse extends ApiResponse {
    mensagem?: string
  }

  export interface AlteraSenhaRequest extends ApiRequest {
    novaSenha: string
    usuario?: any
  }

  export interface GetClientesResponse extends ApiResponse {
    clientes: Cliente[]
  }

  export interface GetDivisoesRequest extends ApiRequest {
    idCliente: number
  }

  export interface GetServicosRequest extends ApiRequest {
    idTipoMob: number
  }

  export interface GetDivisoesResponse extends ApiResponse {
    divisoes: Divisao[]
  }

  export interface GetServicosResponse extends ApiResponse {
    servicos: Servico[]
  }