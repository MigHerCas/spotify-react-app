import React from 'react';
import { AccessToken } from '../api/user';
import DEFAULT_PLAYLISTS_IDS from '../constants/constants';
import PlaylistItem from './PlaylistItem';

interface Props {
  accessToken: AccessToken;
}

export default function PlaylistsPanel({ accessToken }: Props): JSX.Element {
  return (
    <section className="panel playlists-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        {DEFAULT_PLAYLISTS_IDS.map((playlistId) => {
          return (
            <PlaylistItem
              key={playlistId}
              playlistId={playlistId}
              accessToken={accessToken}
            />
          );
        })}
      </ol>
    </section>
  );
}
