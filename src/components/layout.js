import React, { useState, cloneElement } from 'react';
import favicon from '../images/favicon.ico';
import Helmet from 'react-helmet';
import * as themes from '../styles';
import { getSeasonByMonth } from '../utils/datetime';
import Navbar from './navbar';
import Footer from './footer';
import './layout.css';

export default function Layout({ children, location }) {
  const [theme, setTheme] = useState(themes[getSeasonByMonth()]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorTheme0, colorTheme1, colorContent0 } = theme;
  const styles = {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: `linear-gradient(to bottom right, ${colorTheme0}, ${colorTheme1})`,
    color: colorContent0,
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
      {cloneElement(children, { theme: theme, isMobileMenuOpen: isMobileMenuOpen })}
      <Footer />
    </div>
  );
}
