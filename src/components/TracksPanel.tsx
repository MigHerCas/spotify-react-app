import React, { RefObject } from 'react';
import { TrackItem } from '../api/track';
import TrackComponent from './TrackComponent';

interface Props {
  tracks: TrackItem[];
  firstTrackRef: RefObject<HTMLButtonElement>;
}

export default function TracksPanel({
  tracks,
  firstTrackRef,
}: Props): JSX.Element {
  return (
    <section className="panel tracks-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        {tracks &&
          tracks.map((trackItem, index) => {
            const { track } = trackItem;

            return (
              <TrackComponent
                key={track.id}
                trackName={track.name}
                artists={track.artists}
                firstTrack={index === 0}
                firstTrackRef={firstTrackRef}
              />
            );
          })}
      </ol>
    </section>
  );
}
