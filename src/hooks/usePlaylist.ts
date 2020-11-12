import { useEffect, useState } from 'react';
import { AccessToken, PlaylistResponse } from '../api/types';

type PlaylistHookReturn = {
  playlist: PlaylistResponse | undefined;
  playlistLoading: boolean;
  playlistError: boolean;
};

const usePlaylist = (
  accessToken: AccessToken,
  playlistId: string
): PlaylistHookReturn => {
  const [playlist, setPlaylist] = useState<PlaylistResponse>();
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
        const playlistObject: PlaylistResponse = await playlistResponse.json();
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
