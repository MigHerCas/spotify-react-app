import { ID } from './user.d';

export interface Artist {
  id: ID;
  name: string;
}

export interface TrackItem {
  track: Track;
}

export interface Track {
  id: ID;
  name: string;
  artists: Artist[];
}
