export type SpotifyImage = {
  height: null | number;
  width: null | number;
  url: string;
};

export interface PlaylistItem {
  id: string;
  name: string;
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
