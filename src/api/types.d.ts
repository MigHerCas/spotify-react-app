type TokenType = 'Bearer' | 'Access';
type AccessToken = string;
type SpotifyImage = {
  height: null | number;
  width: null | number;
  url: string;
};

type PlaylistItem = {
  track: TrackItem;
};

export interface Artist {
  id: string;
  name: string;
}

export interface TrackItem {
  id: string;
  name: string;
  artists: Artist[];
  href: string;
  preview_url: string;
}

export interface AccessTokenResponse {
  access_token: AccessToken;
  expires_in: number;
  scope: string;
  token_type: TokenType;
}

export interface PlaylistResponse {
  href: string;
  id: string;
  tracks: {
    href: string;
    items: PlaylistItem[];
  };
  images: SpotifyImage[];
  public: boolean;
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
}
