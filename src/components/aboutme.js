import * as React from 'react';
import Summary from './aboutmeSummary';
import Skills from './aboutmeSkills';
import Experiences from './aboutmeExperiences';
// styles
const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '100px',
  alignItems: 'center',
};
// markup
const AboutMe = ({ theme }) => {
  return (
    <div style={pageStyles}>
      <Summary />
      <Skills theme={theme} />
      <Experiences theme={theme} />
    </div>
  );
};

export default AboutMe;
