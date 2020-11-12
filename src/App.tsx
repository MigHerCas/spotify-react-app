import React, { useEffect, useState } from 'react';
import { AccessTokenResponse, PlaylistResponse } from './api/types';

function App(): JSX.Element {
  const [accessToken, setAccessToken] = useState<string>();
  const [playlist, setPlaylist] = useState<PlaylistResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
    REACT_APP_SPOTIFY_AUTH_HEADER,
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

    if (accessToken) {
      fetch(`https://api.spotify.com/v1/playlists/${playlistSamples[1]}`, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setPlaylist(response);
        })
        .catch((ex) => {
          setIsError(ex);
        });
    }
  }, [accessToken]);

  console.log(playlist);

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Playlist description: {playlist?.description}</h2>
      {isError && <span>{isError}</span>}
      {isLoading && <span>{isLoading}</span>}
    </div>
  );
}

export default App;
