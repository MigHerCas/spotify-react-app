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
