import React, { useState } from 'react';
import { TrackItem } from './api/track';
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
  const [selectedTracks, setSelectedTracks] = useState<TrackItem[]>([]);

  return (
    <div className="App">
      <Header />
      <Grid>
        <PlaylistsPanel
          accessToken={accessToken}
          setSelectedTracks={setSelectedTracks}
        />
        <TracksPanel tracks={selectedTracks} />
      </Grid>
    </div>
  );
}
