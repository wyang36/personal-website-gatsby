import * as React from 'react';
import Summary from './aboutmeSummary';
// styles
const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '100px',
};
// markup
const AboutMe = ({ location }) => {
  return (
    <div style={pageStyles}>
      <Summary />
    </div>
  );
};

export default AboutMe;
