import React from 'react';
import { PlaylistItem } from '../api/playlist';
import Track from './Track';

interface Props {
  playlistItem: PlaylistItem;
}
function Playlist({ playlistItem }: Props): JSX.Element {
  const { id, description, href, tracks } = playlistItem;
  return (
    <div>
      <h2>Id: {id}</h2>
      <p>Description: {description}</p>
      <a href={href}>Url</a>

      {tracks &&
        tracks.items.map(({ track }) => (
          <Track trackItem={track} key={track.id} />
        ))}
    </div>
  );
}

export default Playlist;
