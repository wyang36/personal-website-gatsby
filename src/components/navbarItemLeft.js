import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  },
  label: {
    textDecoration: 'none',
    marginLeft: 4,
  },
};

const NavbarItemLeft = ({ label, link, icon, theme, active }) => {
  return (
    <div style={{ ...styles.item, color: active ? theme.colorContent1 : theme.colorContent0 }}>
      <FontAwesomeIcon icon={icon} />
      <Link
        to={link}
        style={{
          ...styles.label,
          color: active ? theme.colorContent1 : theme.colorContent0,
        }}
      >
        {label}
      </Link>
    </div>
  );
};

export default NavbarItemLeft;
