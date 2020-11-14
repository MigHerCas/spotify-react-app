import React from 'react';
import singer from '../assets/images/singer.jpg';

export default function PlaylistsPanel(): JSX.Element {
  return (
    <section className="panel playlists-panel">
      <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
        <li className="playlist__item">
          <button
            type="button"
            className="playlist__button padding-default radius--big selected"
          >
            <div className="playlist__image-wrapper">
              <img src={singer} alt="Alt text" />
            </div>
            <div className="playlist__details">
              <h2 className="playlist__title">Rock Classics</h2>
              <h3 className="playlist__subtitle">Rock</h3>
              <p className="playlist__description">
                Rock legends and epic songs that continue to inspire
                generations.
              </p>
            </div>
          </button>
        </li>
        <li className="playlist__item">
          <button
            type="button"
            className="playlist__button padding-default radius--big"
          >
            <div className="playlist__image-wrapper">
              <img src={singer} alt="Alt text" />
            </div>
            <div className="playlist__details">
              <h2 className="playlist__title">Rock Classics</h2>
              <h3 className="playlist__subtitle">Rock</h3>
              <p className="playlist__description">
                Rock legends and epic songs that continue to inspire
                generations.
              </p>
            </div>
          </button>
        </li>
        <li className="playlist__item">
          <button
            type="button"
            className="playlist__button padding-default radius--big selected"
          >
            <div className="playlist__image-wrapper">
              <img src={singer} alt="Alt text" />
            </div>
            <div className="playlist__details">
              <h2 className="playlist__title">Rock Classics</h2>
              <h3 className="playlist__subtitle">Rock</h3>
              <p className="playlist__description">
                Rock legends and epic songs that continue to inspire
                generations.
              </p>
            </div>
          </button>
        </li>
        <li className="playlist__item">
          <button
            type="button"
            className="playlist__button padding-default radius--big"
          >
            <div className="playlist__image-wrapper">
              <img src={singer} alt="Alt text" />
            </div>
            <div className="playlist__details">
              <h2 className="playlist__title">Rock Classics</h2>
              <h3 className="playlist__subtitle">Rock</h3>
              <p className="playlist__description">
                Rock legends and epic songs that continue to inspire
                generations.
              </p>
            </div>
          </button>
        </li>
        <li className="playlist__item">
          <button
            type="button"
            className="playlist__button padding-default radius--big"
          >
            <div className="playlist__image-wrapper">
              <img src={singer} alt="Alt text" />
            </div>
            <div className="playlist__details">
              <h2 className="playlist__title">Rock Classics</h2>
              <h3 className="playlist__subtitle">Rock</h3>
              <p className="playlist__description">
                Rock legends and epic songs that continue to inspire
                generations.
              </p>
            </div>
          </button>
        </li>
        <li className="playlist__item">
          <button
            type="button"
            className="playlist__button padding-default radius--big"
          >
            <div className="playlist__image-wrapper">
              <img src={singer} alt="Alt text" />
            </div>
            <div className="playlist__details">
              <h2 className="playlist__title">Rock Classics</h2>
              <h3 className="playlist__subtitle">Rock</h3>
              <p className="playlist__description">
                Rock legends and epic songs that continue to inspire
                generations.
              </p>
            </div>
          </button>
        </li>
      </ol>
    </section>
  );
}
