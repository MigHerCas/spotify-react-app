type TokenType = 'Bearer' | 'Access';
type AccessToken = string | undefined;

export interface AccessTokenResponse {
  access_token: AccessToken;
  expires_in: number;
  scope: string;
  token_type: TokenType;
}
