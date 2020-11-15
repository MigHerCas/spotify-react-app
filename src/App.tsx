import React from 'react';
import Grid from './components/layout/Grid';
import Header from './components/layout/Header';
import PlaylistsPanel from './components/PlaylistsPanel';
import TracksPanel from './components/TracksPanel';
import useToken from './hooks/useToken';

const {
  REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
  REACT_APP_SPOTIFY_AUTH_HEADER,
} = process.env;

export default function App(): JSX.Element {
  const { accessToken } = useToken(
    REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
    REACT_APP_SPOTIFY_AUTH_HEADER
  );

  return (
    <div className="App">
      <Header />
      <Grid>
        <PlaylistsPanel accessToken={accessToken} />
        <TracksPanel />
      </Grid>
    </div>
  );
}
