import React, { RefObject } from 'react';
import { Artist } from '../api/track';

interface Props {
  trackName: string;
  artists: Artist[];
  firstTrack: boolean;
  firstTrackRef: RefObject<HTMLButtonElement>;
}

interface TrackButtonProps {
  children: React.ReactNode;
}

type Ref = HTMLButtonElement;

export default function TrackComponent({
  trackName,
  artists,
  firstTrack = false,
  firstTrackRef,
}: Props): JSX.Element {
  const TrackButton = React.forwardRef<Ref, TrackButtonProps>(
    ({ children }: TrackButtonProps, ref) => (
      <button
        type="button"
        ref={firstTrack ? ref : null}
        className={`track__button padding-default radius--big ${
          firstTrack ? 'first-track' : ''
        }`}
      >
        {children}
      </button>
    )
  );

  return (
    <li className="track__item">
      <TrackButton ref={firstTrackRef}>
        <h2 className="track__title">{trackName}</h2>
        {artists &&
          artists.map(({ id, name }) => (
            <h3 key={id} className="track__subtitle">
              {name}
            </h3>
          ))}
      </TrackButton>
    </li>
  );
}
