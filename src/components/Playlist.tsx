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
  const { id, description, href, tracks, images } = playlist;

  // If playlist data has been fetched
  if (id !== '') {
    return (
      <div className="playlist-container">
        <div className="image-wrapper">
          <img src={images[0].url} alt={description} />
        </div>
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
  return <p>Loading</p>;
}
