export type TokenType = 'Bearer' | 'Access';
export type AccessToken = string | undefined;
export type ID = string;

export interface AccessTokenResponse {
  access_token: AccessToken;
  expires_in: number;
  scope: string;
  token_type: TokenType;
}
