import { useEffect, useState } from 'react';
import { PlaylistItem } from '../api/playlist';
import { AccessToken } from '../api/user';
import { NullyPlaylist } from '../utils';

type PlaylistHookReturn = {
  playlist: PlaylistItem;
  playlistLoading: boolean;
  playlistError: boolean;
};

const { REACT_APP_SPOTIFY_PLAYLIST_URL } = process.env;

const usePlaylist = (
  accessToken: AccessToken,
  playlistId: string
): PlaylistHookReturn => {
  const [playlist, setPlaylist] = useState<PlaylistItem>(NullyPlaylist);
  const [playlistLoading, setIsLoading] = useState(false);
  const [playlistError, setIsError] = useState(false);

  useEffect(() => {
    const url = `${REACT_APP_SPOTIFY_PLAYLIST_URL}/${playlistId}`;

    const fetchPlaylist = async (): Promise<void> => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const apiResponse = await response;
        const playlistItem: PlaylistItem = await apiResponse.json();
        setPlaylist(playlistItem);
      } catch (error) {
        setIsError(error);
      }
    };

    if (accessToken) {
      fetchPlaylist();
    }
  }, [accessToken, playlistId]);

  return { playlist, playlistLoading, playlistError };
};

export default usePlaylist;
