import React from 'react';
import spotifyLogo from '../../assets/images/spotifyLogo.svg';

export default function Header(): JSX.Element {
  return (
    <header>
      <img src={spotifyLogo} className="logo" alt="Spotify Logo" />
      <div className="theme-switcher-wrapper">
        <button
          type="button"
          className="theme-switcher shadow--dark radius--big"
        >
          .
        </button>
      </div>
    </header>
  );
}
