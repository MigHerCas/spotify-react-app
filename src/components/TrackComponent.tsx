import React, { Dispatch, RefObject, SetStateAction } from 'react';
import { Artist } from '../api/track';
import { ID } from '../api/user';

interface Props {
  trackId: ID;
  trackName: string;
  artists: Artist[];
  firstTrack: boolean;
  firstTrackRef: RefObject<HTMLButtonElement>;
  selectedTrackId: ID;
  setSelectedTrackId: Dispatch<SetStateAction<ID>>;
}

export default function TrackComponent({
  trackId,
  trackName,
  artists,
  firstTrack = false,
  firstTrackRef,
  selectedTrackId,
  setSelectedTrackId,
}: Props): JSX.Element {
  const handleClick = () => {
    setSelectedTrackId(trackId);
  };

  return (
    <li className="track__item">
      <button
        type="button"
        ref={firstTrack ? firstTrackRef : null}
        className={`track__button padding-default radius--big ${
          selectedTrackId === trackId ? 'selected' : ''
        }`}
        onClick={handleClick}
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
