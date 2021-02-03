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

const NavbarItem = ({ label, link, icon, theme }) => {
  return (
    <div style={styles.item}>
      <FontAwesomeIcon icon={icon} />
      <Link to={link} style={{ ...styles.label, color: theme.colorContent1 }}>
        {label}
      </Link>
    </div>
  );
};

export default NavbarItem;
