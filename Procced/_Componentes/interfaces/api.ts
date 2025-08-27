
export interface ApiResponse {
  status: string,
  errorId?: number,
  error?: string,
  compl?: string,
  token?: string,
  novoToken?: string
}

export interface ApiRequest {
  token: string,
  //  limit?: ILimit,
}
