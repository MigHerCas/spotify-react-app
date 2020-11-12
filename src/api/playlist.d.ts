export type SpotifyImage = {
  height: null | number;
  width: null | number;
  url: string;
};

export interface PlaylistItem {
  href: string;
  id: string;
  tracks: {
    href: string;
    items: TrackItem[];
  };
  images: SpotifyImage[];
  public: boolean;
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
}
