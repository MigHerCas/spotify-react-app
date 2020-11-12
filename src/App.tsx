import React, { useEffect, useState } from 'react';
import { AccessTokenResponse } from './api/types';
import Playlist from './components/Playlist';
import usePlaylist from './hooks/usePlaylist';

function App(): JSX.Element {
  const {
    REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
    REACT_APP_SPOTIFY_AUTH_HEADER,
  } = process.env;

  const [accessToken, setAccessToken] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [{ playlist, playlistLoading, playlistError }] = usePlaylist(
    accessToken,
    '37i9dQZF1DWXRqgorJj26U'
  );

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

  // eslint-disable-next-line no-console
  console.log(playlist);

  // eslint-disable-next-line no-console
  if (isError) console.log(isError);

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Playlist description: {playlist?.description}</h2>
      {isLoading && <span>{isLoading}</span>}
      {playlist && (
        <Playlist
          playlistResponse={playlist}
          playlistIsLoading={playlistLoading}
          playlistError={playlistError}
        />
      )}
    </div>
  );
}

export default App;
