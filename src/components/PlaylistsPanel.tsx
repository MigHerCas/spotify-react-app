import React, { Dispatch, SetStateAction } from 'react';
import { TrackItem } from '../api/track';
import { AccessToken, ID } from '../api/user';
import DEFAULT_PLAYLISTS_IDS from '../constants/constants';
import PlaylistComponent from './PlaylistComponent';

interface Props {
  accessToken: AccessToken;
  selectedPlaylistId: ID;
  setSelectedPlaylistId: Dispatch<SetStateAction<ID>>;
  setSelectedTracks: Dispatch<SetStateAction<TrackItem[]>>;
}

export default function PlaylistsPanel({
  accessToken,
  selectedPlaylistId,
  setSelectedPlaylistId,
  setSelectedTracks,
}: Props): JSX.Element {
  return (
    <section className="panel playlists-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        {DEFAULT_PLAYLISTS_IDS.map((playlistId) => {
          return (
            <PlaylistComponent
              key={playlistId}
              playlistId={playlistId}
              accessToken={accessToken}
              selectedPlaylistId={selectedPlaylistId}
              setSelectedPlaylistId={setSelectedPlaylistId}
              setSelectedTracks={setSelectedTracks}
            />
          );
        })}
      </ol>
    </section>
  );
}
