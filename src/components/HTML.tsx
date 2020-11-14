import React from 'react';
import spotifyLogo from '../assets/images/spotifyLogo.svg';
import singer from '../assets/images/singer.jpg';

export default function HTML(): JSX.Element {
  return (
    <>
      <header>
        <img src={spotifyLogo} className="logo" alt="Spotify Logo" />
        <div className="theme-switcher-wrapper">
          <span className="theme-switcher-span">Theme</span>
          <button
            type="button"
            className="theme-switcher shadow--dark radius--big"
          >
            .
          </button>
        </div>
      </header>
      <main>
        <section className="grid">
          <div className="panel playlists-panel">
            <ol className="scrolling-wrapper padding-default shadow--dark radius--big">
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
          </div>
          <div className="panel tracks-panel">
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
              <li className="track__item">
                <button
                  type="button"
                  className="track__button padding-default radius--big"
                >
                  <h2 className="track__title">Find my way</h2>
                  <h3 className="track__subtitle">Da baby</h3>
                </button>
              </li>

              <li className="track__item">
                <button
                  type="button"
                  className="track__button padding-default radius--big"
                >
                  <h2 className="track__title">Find my way</h2>
                  <h3 className="track__subtitle">Da baby</h3>
                </button>
              </li>

              <li className="track__item">
                <button
                  type="button"
                  className="track__button padding-default radius--big"
                >
                  <h2 className="track__title">Find my way</h2>
                  <h3 className="track__subtitle">Da baby</h3>
                </button>
              </li>
              <li className="track__item">
                <button
                  type="button"
                  className="track__button padding-default radius--big"
                >
                  <h2 className="track__title">Find my way</h2>
                  <h3 className="track__subtitle">Da baby</h3>
                </button>
              </li>
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
          </div>
        </section>
      </main>
    </>
  );
}
