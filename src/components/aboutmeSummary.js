import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  photo: {
    width: '200px',
    height: '200px',
    margin: '20px',
    backgroundImage: 'url(../../my-photo.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  paragraphDiv: {
    margin: '10px',
    lineHeight: '20px',
    maxWidth: '1000px',
  },
};

const aboutSummary = () => (
  <div style={styles.container}>
    <div style={styles.photo}></div>
    <div style={styles.paragraphDiv}>
      <p>
        I graduated from Georgia Tech in Dec 2013 with a BS in Electrical Engineering. However,
        since my second year of college, programming has been my true passion. I spent nearly all
        my engineering electives on programming classes and have been actively seeking out ways to
        improve ever since.
      </p>
      <p>
        In Jan 2014 I started my first job as a web developer, and learned all the basics (HTML,
        Javascript, and CSS). Since then the world of web development has evolved rapidly. I always
        felt it's important to stay on top of the current trends and keep learning new exciting
        tech, so I started taking Udemy courses in my spare time and building apps using the newly
        acquired knowledge, for learning purposes and for fun!
      </p>
      <p>
        In 2015 I went to a beginner rock climbing class as my birthday present and have loved it
        since! I mostly climb indoors and venture outdoors occasionally. I currently climb around
        5.11s and boulder V4s.
      </p>
    </div>
  </div>
);

export default aboutSummary;
