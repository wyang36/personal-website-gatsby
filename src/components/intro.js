import React from 'react';
import Fade from 'react-reveal/Fade';

// styles
const styles = {
  intro: {
    width: '80%',
    margin: 'auto',
    overflow: 'auto',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h1: {
    fontSize: '2rem',
  },
  h2: {
    fontSize: '1.5rem',
  },
};
// markup
const Intro = ({ theme, isMobileMenuOpen }) => {
  return (
    <div style={styles.intro}>
      <Fade top disabled={isMobileMenuOpen}>
        <div>
          <h1 style={styles.h1}>
            Hi! I'm <span style={{ color: theme.colorContent1 }}>Kira</span>.
          </h1>
          <h2 style={styles.h2}>
            I'm a full-stack <span style={{ color: theme.colorContent1 }}>software engineer</span>{' '}
            and amateur rock climber based in Los Angeles CA.
          </h2>
        </div>
      </Fade>
    </div>
  );
};

export default Intro;
