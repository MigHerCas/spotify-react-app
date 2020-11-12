import { PlaylistItem } from '../api/playlist';

const NullyPlaylist: PlaylistItem = {
  id: '',
  name: '',
  href: '',
  tracks: {
    href: '',
    items: [],
  },
  images: [],
  public: false,
  collaborative: false,
  description: '',
  external_urls: {
    spotify: '',
  },
};

export default NullyPlaylist;
