import React from 'react';
import { Artist } from '../api/track';

interface Props {
  trackName: string;
  artists: Artist[];
}

export default function TrackComponent({
  trackName,
  artists,
}: Props): JSX.Element {
  return (
    <li className="track__item">
      <button
        type="button"
        className="track__button padding-default radius--big"
      >
        <h2 className="track__title">{trackName}</h2>
        {artists &&
          artists.map(({ id, name }) => (
            <h3 key={id} className="track__subtitle">
              {name}
            </h3>
          ))}
      </button>
    </li>
  );
}
