import React from 'react';
import { TrackItem } from '../api/types';

interface Props {
  trackResponse: TrackItem;
}
function Track({ trackResponse }: Props): JSX.Element {
  const { id, name, href, artists } = trackResponse;

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
