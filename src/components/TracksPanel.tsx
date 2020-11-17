import React, { RefObject, useEffect, useState } from 'react';
import { TrackItem } from '../api/track';
import { ID } from '../api/user';
import TrackComponent from './TrackComponent';

interface Props {
  tracks: TrackItem[];
  firstTrackRef: RefObject<HTMLButtonElement>;
}

export default function TracksPanel({
  tracks,
  firstTrackRef,
}: Props): JSX.Element {
  const [selectedTrackId, setSelectedTrackId] = useState<ID>('');

  useEffect(() => {
    console.log(selectedTrackId);
  }, [selectedTrackId]);
  return (
    <section className="panel tracks-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        {tracks &&
          tracks.map((trackItem, index) => {
            const { track } = trackItem;

            <label htmlFor="idGenero">
              Genero
              <input id="idGenero" type="radio" name="genero" value="m" />
            </label>;

            return (
              <TrackComponent
                key={track.id}
                trackId={track.id}
                trackName={track.name}
                artists={track.artists}
                firstTrack={index === 0}
                firstTrackRef={firstTrackRef}
                selectedTrackId={selectedTrackId}
                setSelectedTrackId={setSelectedTrackId}
              />
            );
          })}
      </ol>
    </section>
  );
}
