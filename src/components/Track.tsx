import React from 'react';
import { TrackItem } from '../api/track';

interface Props {
  trackItem: TrackItem;
}

export default function Track({ trackItem }: Props): JSX.Element {
  return (
    <div>
      <div className="track" id={trackItem.id} />
    </div>
  );
}
