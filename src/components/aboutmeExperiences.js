import React from 'react';

import Experience from './aboutmeExperience';

const experienceData = [
  {
    employer: 'Knock.com',
    role: 'Lead Frontend Engineer',
    time: 'July 2018 - Dec 2021',
    description: `This is my second web developer job and 
        I was in the team responsible for the public facing website and the internal application. I had exposure to various modern web development tools and frameworks like 
        React, GraphQL, React Native, and NextJS. As a lead engineer, I also participated in the hiring of several frontend, mobile, and test engineers.`,
  },
  {
    employer: 'ProfitSword LLC',
    role: 'Senior Software Engineer',
    time: 'Jan 2014 - July 2018',
    description: `This is my first job out of college and I was in a team responsible for rewriting the biggest product
         to a more modern looking single page application using newer technologies. Because of this, I learned about all sorts of technologies used throughout the whole stack
         and experimented with a bunch more. In 2017 I self-taught VueJS and led the company wide effort to rewrite the entire application for the second time. 
         I was promoted to senior engineer afterwards.`,
  },
  {
    employer: 'Panasonic Automotive Systems of America',
    role: 'Tools Software Co-op',
    time: 'Jan - May 2013',
    description: `This is my last co-op term during my time at Georgia Tech. I assisted in the programming of the GUIs used for testing. My biggest project was to design and
        program buttons in the GUI to mimic the ones on a car radio, so the testers can control the radio from their computers.`,
  },
  {
    employer: 'Panasonic Automotive Systems of America',
    role: 'Test Development Co-op',
    time: 'May - August 2012, Aug - Dec 2011',
    description: `These are my first 2 co-op terms, and since I was a EE major, my role was more electronics related.
    I was mainly responsible for building and troubleshooting PCBs, connectors, and harnesses. `,
  },
];

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '50px',
  },
  experiencesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1000px',
  },
  headerBox: {
    width: '200px',
    margin: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20pt',
    lineHeight: '70px',
  },
};
const experiences = ({ theme }) => {
  return (
    <div style={styles.container}>
      <div style={styles.headerBox}>EXPERIENCES</div>
      <div style={styles.experiencesContainer}>
        {experienceData.map((exp, index) => {
          return <Experience key={index} info={exp} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default experiences;
