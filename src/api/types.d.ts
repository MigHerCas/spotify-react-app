type TokenType = 'Bearer' | 'Access';

export interface AccessTokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: TokenType;
}

export interface PlaylistResponse {
  href: string;
  id: string;
  tracks: any;
  public: boolean;
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
}
