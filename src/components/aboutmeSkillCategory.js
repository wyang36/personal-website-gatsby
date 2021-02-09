import React from 'react';

const styles = {
  skillCategory: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
    width: '240px',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

const skillcategory = (props) => {
  return (
    <div style={styles.skillCategory}>
      <div style={{ ...styles.title, color: props.theme.colorContent1 }}>
        {props.info.category.toUpperCase()}
      </div>
      <div>
        <ul>
          {props.info.skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default skillcategory;
