import { useEffect, useState } from 'react';
import { PlaylistItem } from '../api/playlist';
import { AccessToken } from '../api/user';

type PlaylistHookReturn = {
  playlist: PlaylistItem | undefined;
  playlistLoading: boolean;
  playlistError: boolean;
};

const usePlaylist = (
  accessToken: AccessToken,
  playlistId: string
): PlaylistHookReturn => {
  const [playlist, setPlaylist] = useState<PlaylistItem>();
  const [playlistLoading, setIsLoading] = useState(false);
  const [playlistError, setIsError] = useState(false);

  const { REACT_APP_SPOTIFY_PLAYLIST_URL } = process.env;

  useEffect(() => {
    const fetchPlaylist = async (): Promise<void> => {
      const url = `${REACT_APP_SPOTIFY_PLAYLIST_URL}/${playlistId}`;
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const playlistResponse = await response;
        const playlistObject: PlaylistItem = await playlistResponse.json();
        setPlaylist(playlistObject);
      } catch (error) {
        setIsError(error);
      }
    };

    if (accessToken) {
      fetchPlaylist();
    }
  }, [accessToken, REACT_APP_SPOTIFY_PLAYLIST_URL, playlistId]);

  return { playlist, playlistLoading, playlistError };
};

export default usePlaylist;
