import React from 'react';
import { AccessToken } from '../api/user';
import usePlaylist from '../hooks/usePlaylist';

interface Props {
  playlistId: string;
  accessToken: AccessToken;
}

export default function PlaylistItem({
  playlistId,
  accessToken,
}: Props): JSX.Element {
  const { playlist } = usePlaylist(accessToken, playlistId);
  const { id, name, description, images, collaborative } = playlist;

  // If playlist data has been fetched
  if (id !== '') {
    return (
      <li className="playlist__item">
        <button
          type="button"
          className="playlist__button padding-default radius--big selected"
        >
          <div className="playlist__image-wrapper">
            <img src={images[0].url} alt="Alt text" />
          </div>
          <div className="playlist__details">
            <h2 className="playlist__title">{name}</h2>
            <h3 className="playlist__subtitle">
              {collaborative ? 'Collaborative' : 'Non collaborative'}
            </h3>
            <p className="playlist__description">{description}</p>
          </div>
        </button>
      </li>
    );
  }
  return <p>Loading</p>;
}
