export interface AuthTokenResult {
  id: string
  iat: number
  exp: number
}

export interface IUseToken {
  id: string
  isExpired: boolean
}
