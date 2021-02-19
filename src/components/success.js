import React from 'react';
import Fade from 'react-reveal/Fade';

// styles
const styles = {
  container: {
    width: '80%',
    margin: 'auto',
    overflow: 'auto',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
  },
  h2: {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
};
// markup
const Success = ({ isMobileMenuOpen }) => {
  return (
    <div style={styles.container}>
      <Fade top disabled={isMobileMenuOpen}>
        <div>
          <h2 style={styles.h2}>Thanks for messaging me!</h2>
        </div>
      </Fade>
    </div>
  );
};

export default Success;
