import React from 'react';
import { TrackItem } from '../api/track';
import TrackComponent from './TrackComponent';

interface Props {
  tracks: TrackItem[];
}

export default function TracksPanel({ tracks }: Props): JSX.Element {
  return (
    <section className="panel tracks-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        {tracks &&
          tracks.map((trackItem) => {
            const { track } = trackItem;

            return (
              <TrackComponent
                key={track.id}
                trackName={track.name}
                artists={track.artists}
              />
            );
          })}
      </ol>
    </section>
  );
}
