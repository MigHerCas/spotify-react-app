import React, { useState } from 'react';
import HTML from './components/HTML';
import Playlist from './components/Playlist';
import PlaylistGrid from './components/PlaylistGrid';
import DEFAULT_PLAYLISTS_IDS from './constants/constants';
import useToken from './hooks/useToken';

const {
  REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
  REACT_APP_SPOTIFY_AUTH_HEADER,
} = process.env;

export default function App(): JSX.Element {
  const [markupBuilding] = useState(true);
  const { accessToken } = useToken(
    REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
    REACT_APP_SPOTIFY_AUTH_HEADER
  );

  return (
    <div className="App">
      {markupBuilding ? (
        <HTML />
      ) : (
        <PlaylistGrid>
          {accessToken &&
            DEFAULT_PLAYLISTS_IDS.map((playlistId) => {
              return (
                <Playlist
                  key={playlistId}
                  playlistId={playlistId}
                  accessToken={accessToken}
                />
              );
            })}
        </PlaylistGrid>
      )}
    </div>
  );
}
