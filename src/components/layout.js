import React, { useState, cloneElement } from 'react';
import favicon from '../images/favicon.ico';
import Helmet from 'react-helmet';
import * as themes from '../styles';
import { getSeasonByMonth } from '../utils/datetime';
import Navbar from './navbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './layout.css';

const styles = {
  themeSwitcher: {
    padding: '10px 15px',
    border: '2px solid',
    borderRadius: '3px',
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: 60,
    right: 10,
    fontSize: '10pt',
    zIndex: 0,
  },
};

const ThemeSwitcher = ({ theme, onChange }) => {
  return (
    <div style={{ ...styles.themeSwitcher, color: theme.colorContent1 }} onClick={onChange}>
      Theme: <FontAwesomeIcon icon={theme.icon} size="sm" /> {theme.name}
    </div>
  );
};

export default function Layout({ children, location }) {
  const [theme, setTheme] = useState(themes[getSeasonByMonth()]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorTheme0, colorTheme1, colorContent0 } = theme;
  const styles = {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: `linear-gradient(to right, ${colorTheme0}, ${colorTheme1})`,
    color: colorContent0,
  };

  const handleThemeSwitch = () => {
    setTheme((currTheme) => themes[currTheme.next]);
  };
  return (
    <div style={styles}>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>Kira Yang - Web Developer</title>
      </Helmet>
      <style jsx="true" global="true">{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Navbar
        theme={theme}
        location={location}
        onSetMobileMenu={(value) => setIsMobileMenuOpen(value)}
      />
      <ThemeSwitcher theme={theme} onChange={handleThemeSwitch} />
      {cloneElement(children, { theme: theme, isMobileMenuOpen: isMobileMenuOpen })}
      <Footer />
    </div>
  );
}
