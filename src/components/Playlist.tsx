import React from 'react';
import { PlaylistResponse } from '../api/types';
import Track from './Track';

interface Props {
  playlistResponse: PlaylistResponse;
  playlistIsLoading: boolean;
  playlistError: boolean;
}

function Playlist({
  playlistResponse,
  playlistIsLoading,
  playlistError,
}: Props): JSX.Element {
  const { id, description, href, tracks } = playlistResponse;

  // eslint-disable-next-line no-console
  console.log(playlistIsLoading, playlistError);

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
