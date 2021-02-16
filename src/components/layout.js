import React, { useState, cloneElement } from 'react';
import favicon from '../images/favicon.ico';
import Helmet from 'react-helmet';
import Navbar from './navbar';
import Footer from './footer';
import './layout.css';
import { themeContext } from '../hooks/themeProvider';

export default function Layout({ children, location }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <themeContext.Consumer>
      {(context) => {
        if (!context) return null;
        const { colorTheme0, colorTheme1, colorContent0 } = context.theme;
        const styles = {
          width: '100vw',
          minHeight: '100vh',
          backgroundImage: `linear-gradient(to right, ${colorTheme0}, ${colorTheme1})`,
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
              {...context}
              location={location}
              onSetMobileMenu={(value) => setIsMobileMenuOpen(value)}
            />
            {cloneElement(children, { theme: context.theme, isMobileMenuOpen: isMobileMenuOpen })}
            <Footer />
          </div>
        );
      }}
    </themeContext.Consumer>
  );
}
