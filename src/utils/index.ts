import { PlaylistItem } from '../api/playlist';

export default function serialize(
  obj: Record<string, string | number | boolean>,
  isStartingFromMiddle = false
): string {
  const encodedComponents: string[] = [];
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    if (key) {
      encodedComponents.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
      );
    }
  });

  return encodedComponents.length > 0 && !isStartingFromMiddle
    ? `?${encodedComponents.join('&')}`
    : '';
}

export const NullyPlaylist: PlaylistItem = {
  href: '',
  id: '',
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
