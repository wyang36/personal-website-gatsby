import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import Pulse from 'react-reveal/Pulse';

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  label: {
    textDecoration: 'none',
    marginLeft: 4,
  },
};

const NavbarItem = ({ label, link, icon, theme, active }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Pulse when={isHovered} forever>
      <div
        style={{ ...styles.item, borderBottomColor: active ? theme.colorBrand3 : 'transparent' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon icon={icon} />
        <Link
          to={link}
          style={{
            ...styles.label,
            color: theme.colorContent0,
          }}
        >
          {label}
        </Link>
      </div>
    </Pulse>
  );
};

export default NavbarItem;
