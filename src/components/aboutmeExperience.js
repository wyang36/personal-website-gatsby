import React from 'react';

const styles = {
  experienceWrapper: {
    display: 'flex',
    margin: '20px',
    flexDirection: 'column',
  },
  employer: {
    fontWeight: 'bold',
    fontSize: '15pt',
    margin: '5px 0',
  },

  roleAndTime: {
    margin: '5px 0',
  },
};
const experience = (props) => {
  return (
    <div style={styles.experienceWrapper}>
      <div style={{ ...styles.employer, color: props.theme.colorContent1 }}>
        {props.info.employer}
      </div>
      <div style={{ ...styles.roleAndTime, color: props.theme.colorContent2 }}>
        <span style={{ float: 'left' }}>{props.info.role}</span>
        <span style={{ float: 'right' }}>{props.info.time}</span>
      </div>
      <div>
        <p>{props.info.description}</p>
      </div>
    </div>
  );
};

export default experience;
