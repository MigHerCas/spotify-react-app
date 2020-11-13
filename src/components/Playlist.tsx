import React from 'react';
import { AccessToken } from '../api/user';
import usePlaylist from '../hooks/usePlaylist';
import Track from './Track';

interface Props {
  playlistId: string;
  accessToken: AccessToken;
}

export default function Playlist({
  playlistId,
  accessToken,
}: Props): JSX.Element {
  const { playlist } = usePlaylist(accessToken, playlistId);
  const { id, name, description, tracks, images } = playlist;

  // If playlist data has been fetched
  if (id !== '') {
    return (
      <div className="playlist">
        <div className="playlist__image-wrapper">
          <img
            className="playlist__image"
            src={images[0].url}
            alt={description}
          />
        </div>
        <h2 className="playlist__title">{name}</h2>
        <p className="playlist__description">{description}</p>
        {tracks &&
          tracks.items.map(({ track }) => (
            <Track trackItem={track} key={track.id} />
          ))}
      </div>
    );
  }
  return <p>Loading</p>;
}
