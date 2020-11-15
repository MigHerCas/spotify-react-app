import React, { useEffect, useState } from 'react';
import spotifyLogo from '../../assets/images/spotifyLogo.svg';
import spotifyLogoBlack from '../../assets/images/spotifyLogoBlack.svg';

type Theme = 'dark-theme' | 'light-theme';

export default function Header(): JSX.Element {
  const storedTheme = localStorage.getItem('user-theme') as Theme;

  const [theme, setTheme] = useState<Theme>(storedTheme || 'dark-theme');
  const themeHolder = document.querySelector('body');

  useEffect(() => {
    themeHolder?.classList.add(theme);
    localStorage.setItem('user-theme', theme);
  }, [themeHolder, theme]);

  return (
    <header>
      <img
        src={theme === 'dark-theme' ? spotifyLogo : spotifyLogoBlack}
        className="logo"
        alt="Spotify Logo"
      />
      <div className="theme-switcher-wrapper">
        <button
          type="button"
          className="theme-switcher shadow--dark radius--big"
          onClick={() => {
            themeHolder?.classList.remove(theme);
            setTheme((currentTheme) =>
              currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'
            );
          }}
        >
          .
        </button>
      </div>
    </header>
  );
}
