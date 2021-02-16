import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { MENUS } from '../utils/data';
import Item from './navbarItem';
import LeftMenu from './navbarLeft';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const styles = {
  topbar: {
    width: '100vw',
    height: '50px',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
  },
  topbarLeft: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
  },
  topbarRight: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 16,
  },
  themeSwitcher: {
    padding: '10px 15px',
    border: '2px solid',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '10pt',
    marginRight: '15px',
    width: '120px',
    justifyContent: 'center',
    marginTop: '4px',
  },
};

const ThemeSwitcher = ({ theme, onChange }) => {
  return (
    <div style={{ ...styles.themeSwitcher, color: theme.colorContent1 }} onClick={onChange}>
      Theme:&nbsp;
      <FontAwesomeIcon icon={theme.icon} size="sm" />
      &nbsp;{theme.name}
    </div>
  );
};

const Navbar = ({ theme, handleThemeSwitch, location, onSetMobileMenu }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const breakpoints = useBreakpoint();

  useEffect(() => {
    onSetMobileMenu(isMobileMenuOpen);
  }, [isMobileMenuOpen, onSetMobileMenu]);

  return (
    <header
      style={{
        ...styles.topbar,
        backgroundImage: `linear-gradient(to right, ${theme.colorTheme0}, ${theme.colorTheme1})`,
      }}
    >
      <div
        style={styles.topbarLeft}
        onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
      >
        {breakpoints.s ? (
          <FontAwesomeIcon icon={faBars} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faFeatherAlt} size="lg" />
        )}
      </div>
      {breakpoints.s || breakpoints.s === undefined ? (
        isMobileMenuOpen ? (
          <LeftMenu theme={theme} location={location} />
        ) : (
          <ThemeSwitcher theme={theme} onChange={handleThemeSwitch} />
        )
      ) : (
        <div style={styles.topbarRight}>
          <ThemeSwitcher theme={theme} onChange={handleThemeSwitch} />
          {MENUS.map((item) => (
            <Item
              key={item.link}
              theme={theme}
              {...item}
              active={location.pathname === item.link || location.pathname === `${item.link}/`}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
