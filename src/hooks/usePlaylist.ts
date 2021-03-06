import { useEffect, useState } from 'react';
import { ApiError } from '../api/error';
import { PlaylistItem } from '../api/playlist';
import { AccessToken } from '../api/user';
import NullyPlaylist from '../utils';

type PlaylistHookReturn = {
  playlist: PlaylistItem;
  playlistLoading: boolean;
  playlistError: ApiError;
};

const { REACT_APP_SPOTIFY_PLAYLIST_URL } = process.env;

const usePlaylist = (
  accessToken: AccessToken,
  playlistId: string
): PlaylistHookReturn => {
  const [playlist, setPlaylist] = useState<PlaylistItem>(NullyPlaylist);
  const [playlistLoading, setIsLoading] = useState(false);
  const [playlistError, setIsError] = useState<ApiError>('');

  useEffect(() => {
    const url = `${REACT_APP_SPOTIFY_PLAYLIST_URL}/${playlistId}`;

    const fetchPlaylist = async (): Promise<void> => {
      setIsError('');
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const apiResponse = await response;

        if (!apiResponse.ok) {
          setIsError('Fetch error');
        }

        const playlistItem: PlaylistItem = await apiResponse.json();
        setPlaylist(playlistItem);
        setIsLoading(false);
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
