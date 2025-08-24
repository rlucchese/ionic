
export interface ApiResponse {
  status: string,
  errorId?: number,
  error?: string,
  compl?: string,
}

export interface ApiRequest {
  token: string,
  //  limit?: ILimit,
}
