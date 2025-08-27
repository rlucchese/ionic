export interface ColaboradorArquivo {
    token: string,
    nome: string,
}

export interface ColaboradorDocumento {
    documento: string,
    quantiadeDocumentos: number,
    arquivos: ColaboradorArquivo[]
}

export interface ColaboradorCliente {
  idCliente: number,
  nome: string,
  quantidadeDocumentos: number,
  documentos: ColaboradorDocumento[]
}