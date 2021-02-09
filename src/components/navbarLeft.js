import React from 'react';
import { MENUS } from '../utils/data';
import Item from './navbarItemLeft';
import Slide from 'react-reveal/Slide';

const styles = {
  leftMenu: {
    width: '100vw',
    height: 'calc(100vh - 50px)',
    position: 'fixed',
    top: 50,
    paddingLeft: 16,
    paddingTop: 16,
  },
};

const NavbarLeft = ({ theme, location }) => {
  return (
    <Slide left ssrFadeout>
      <div
        style={{
          ...styles.leftMenu,
          backgroundImage: `linear-gradient(to bottom right, ${theme.colorTheme0}, ${theme.colorTheme1})`,
        }}
      >
        {MENUS.map((item) => (
          <Item key={item.link} theme={theme} {...item} active={location.pathname === item.link} />
        ))}
      </div>
    </Slide>
  );
};

export default NavbarLeft;
