import React from 'react';

export default function TracksPanel(): JSX.Element {
  return (
    <section className="panel tracks-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        <li className="track__item">
          <button
            type="button"
            className="track__button padding-default radius--big"
          >
            <h2 className="track__title">Find my way</h2>
            <h3 className="track__subtitle">Da baby</h3>
          </button>
        </li>
      </ol>
    </section>
  );
}
