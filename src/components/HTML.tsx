import React from 'react';
import spotifyLogo from '../assets/images/spotiyLogo.png';

export default function HTML(): JSX.Element {
  return (
    <>
      <header>
        <img src={spotifyLogo} alt="Spotify Logo" />
        <div className="theme-switcher-wrapper">
          <span>Theme</span>
          <div className="theme-switcher shadow--dark radius--big" />
        </div>
      </header>
    </>
  );
}
