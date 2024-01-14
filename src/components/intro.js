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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 130px)',
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
            I'm an experienced <span style={{ color: theme.colorContent2 }}>software engineer</span>{' '}
            with strong academic background in <span style={{ color: theme.colorContent2 }}>machine learning</span>.
          </h2>
        </div>
      </Fade>
    </div>
  );
};

export default Intro;
