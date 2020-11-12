import React from 'react';
import { PlaylistResponse } from '../api/types';
import Track from './Track';

interface Props {
  playlistResponse: PlaylistResponse;
}
function Playlist({ playlistResponse }: Props): JSX.Element {
  const { id, description, href, tracks } = playlistResponse;
  return (
    <div>
      <h2>Id: {id}</h2>
      <p>Description: {description}</p>
      <a href={href}>Url</a>

      {tracks &&
        tracks.items.map(({ track }) => (
          <Track trackResponse={track} key={track.id} />
        ))}
    </div>
  );
}

export default Playlist;
