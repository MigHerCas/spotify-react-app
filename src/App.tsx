import React, { useEffect, useState } from 'react';
import { AccessTokenResponse, PlaylistResponse } from './api/types';
import Playlist from './components/Playlist';

function App(): JSX.Element {
  const [accessToken, setAccessToken] = useState<string>();
  const [playlist, setPlaylist] = useState<PlaylistResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
    REACT_APP_SPOTIFY_AUTH_HEADER,
    REACT_APP_SPOTIFY_PLAYLIST_URL,
  } = process.env;

  useEffect(() => {
    const getAccessToken = async (): Promise<void> => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(
          `${REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL}`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              Authorization: `Basic ${REACT_APP_SPOTIFY_AUTH_HEADER}`,
            },
            body: 'grant_type=client_credentials',
          }
        );

        const dataJson = await response;
        const accessTokenResponse: AccessTokenResponse = await dataJson.json();
        setAccessToken(accessTokenResponse.access_token);
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    getAccessToken();
  }, [REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL, REACT_APP_SPOTIFY_AUTH_HEADER]);

  useEffect(() => {
    const playlistSamples = [
      '37i9dQZF1DWXRqgorJj26U',
      '37i9dQZF1DWWGFQLoP9qlv',
      '37i9dQZEVXbKCF6dqVpDkS',
    ];

    const fetchPlaylist = async (): Promise<void> => {
      const url = `${REACT_APP_SPOTIFY_PLAYLIST_URL}/${playlistSamples[1]}`;
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
  }, [accessToken, REACT_APP_SPOTIFY_PLAYLIST_URL]);

  // eslint-disable-next-line no-console
  console.log(playlist);

  // eslint-disable-next-line no-console
  if (isError) console.log(isError);

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Playlist description: {playlist?.description}</h2>
      {isLoading && <span>{isLoading}</span>}
      {playlist && <Playlist playlistResponse={playlist} />}
    </div>
  );
}

export default App;
