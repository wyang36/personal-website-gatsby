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

const aboutSummary = ({ image }) => (
  <div style={styles.container}>
    <div style={{ ...styles.photo, backgroundImage: `url(${image.file.url})` }}></div>
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
        In Jan 2022 I returned to school to pursue a master's degree in computer science with specialization in machine learning.
        In the era of artificial intelligence, I am driven to remain at the forefront of innovation, and excited about witnessing the endless possibilities that AI holds for our future. I'm projected to graduate in December 2023 with a 4.0 GPA.
      </p>
    </div>
  </div>
);

export default aboutSummary;
