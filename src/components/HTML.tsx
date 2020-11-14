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
          <div className="panel playlist-panel shadow--dark radius--big">
            <div className="scrolling-wrapper padding-default">
              <button
                type="button"
                className="playlist__item padding-default radius--big"
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

              <button
                type="button"
                className="playlist__item padding-default radius--big"
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
              <button
                type="button"
                className="playlist__item padding-default radius--big"
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
              <button
                type="button"
                className="playlist__item padding-default radius--big"
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
              <button
                type="button"
                className="playlist__item padding-default radius--big"
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
            </div>
          </div>
          {/* <div className="panel tracks-panel shadow--dark radius--big">
            <div className="scrolling-wrapper" />
          </div> */}
        </section>
      </main>
    </>
  );
}
