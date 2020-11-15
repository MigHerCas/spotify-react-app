import React, { Dispatch, SetStateAction } from 'react';
import { TrackItem } from '../api/track';
import { AccessToken } from '../api/user';
import DEFAULT_PLAYLISTS_IDS from '../constants/constants';
import PlaylistItem from './PlaylistItem';

interface Props {
  accessToken: AccessToken;
  setSelectedTracks: Dispatch<SetStateAction<TrackItem[]>>;
}

export default function PlaylistsPanel({
  accessToken,
  setSelectedTracks,
}: Props): JSX.Element {
  return (
    <section className="panel playlists-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        {DEFAULT_PLAYLISTS_IDS.map((playlistId) => {
          return (
            <PlaylistItem
              key={playlistId}
              playlistId={playlistId}
              accessToken={accessToken}
              setSelectedTracks={setSelectedTracks}
            />
          );
        })}
      </ol>
    </section>
  );
}
