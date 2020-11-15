export interface Artist {
  id: string;
  name: string;
}

export interface TrackItem {
  track: Track;
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
}
