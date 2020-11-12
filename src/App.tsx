import React from 'react';
import Playlist from './components/Playlist';
import usePlaylist from './hooks/usePlaylist';
import useToken from './hooks/useToken';

const {
  REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
  REACT_APP_SPOTIFY_AUTH_HEADER,
} = process.env;

function App(): JSX.Element {
  const { accessToken, accessIsLoading, accessError } = useToken(
    REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
    REACT_APP_SPOTIFY_AUTH_HEADER
  );
  const { playlist, playlistLoading, playlistError } = usePlaylist(
    accessToken,
    '37i9dQZF1DWXRqgorJj26U'
  );

  // eslint-disable-next-line no-console
  console.log(playlist);

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Playlist description: {playlist?.description}</h2>
      {playlist && <Playlist playlistItem={playlist} />}
    </div>
  );
}

export default App;
