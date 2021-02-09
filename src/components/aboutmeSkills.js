import React from 'react';
import SkillCategory from './aboutmeSkillCategory';

const skillsData = [
  {
    category: 'Programming/Markup Languages',
    skills: ['Javascript (ES6)/JSX', 'HTML', 'CSS/Sass', 'C#', 'SQL', 'C++'],
  },
  {
    category: 'Frameworks/Libraries',
    skills: [
      'ReactJS',
      'GraphQL',
      'React Native',
      'VueJS',
      'Angular',
      'NodeJS',
      'jQuery',
      'D3',
      '.NET',
    ],
  },
  {
    category: 'Develeopement Tools',
    skills: [
      'Git/Github',
      'Subversion',
      'MongoDB',
      'MS Visual Studio',
      'Visual Studio Code',
      'Adobe Photoshop',
    ],
  },
  {
    category: 'Other',
    skills: ['Fluent in Mandarin', 'Belay certified', 'Lead certified'],
  },
];

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '50px',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '60vw;',
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
const skills = ({ theme }) => {
  return (
    <div style={styles.container}>
      <div style={styles.headerBox}>SKILLS</div>
      <div style={styles.skillsContainer}>
        {skillsData.map((skill) => {
          return <SkillCategory key={skill.category} info={skill} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default skills;
