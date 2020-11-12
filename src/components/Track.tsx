import React from 'react';
import { TrackItem } from '../api/track';

interface Props {
  trackItem: TrackItem;
}

function Track({ trackItem }: Props): JSX.Element {
  const { id, name, href, artists } = trackItem;
  return (
    <div>
      <div className="track">
        <p>Track Id: {id}</p>
        <p>Track name: {name}</p>
        <p>Track href: {href}</p>
        <div>
          {artists &&
            artists.map((artist) => {
              return <p key={artist.id}>Artist name: {artist.name}</p>;
            })}
        </div>
      </div>
    </div>
  );
}

export default Track;
