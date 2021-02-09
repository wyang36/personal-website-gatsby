import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const style = {
  width: '100%',
  textAlign: 'center',
  zIndex: 90,
  fontSize: '10pt',
  marginTop: '50px',
  paddingBottom: '50px',
};
const footer = () => {
  const year = new Date().getFullYear();
  return (
    <div style={style}>
      <p>
        <FontAwesomeIcon icon={faCopyright} />
        &nbsp; Kira Yang {year}
      </p>
    </div>
  );
};

export default footer;
