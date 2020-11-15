import React, { Dispatch, SetStateAction } from 'react';
import { TrackItem } from '../api/track';
import { AccessToken } from '../api/user';
import usePlaylist from '../hooks/usePlaylist';

interface Props {
  playlistId: string;
  accessToken: AccessToken;
  selectedPlaylistId: string;
  setSelectedPlaylistId: Dispatch<SetStateAction<string>>;
  setSelectedTracks: Dispatch<SetStateAction<TrackItem[]>>;
}

export default function PlaylistComponent({
  playlistId,
  accessToken,
  selectedPlaylistId,
  setSelectedPlaylistId,
  setSelectedTracks,
}: Props): JSX.Element {
  const { playlist } = usePlaylist(accessToken, playlistId);
  const { id, name, description, images, collaborative, tracks } = playlist;

  // If playlist data has been fetched
  if (id !== '') {
    return (
      <li className="playlist__item">
        <button
          type="button"
          className={`playlist__button padding-default radius--big ${
            selectedPlaylistId === id ? 'selected' : ''
          }`}
          onClick={() => {
            setSelectedPlaylistId(id);
            setSelectedTracks(tracks.items);
          }}
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
