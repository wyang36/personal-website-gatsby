import React from 'react';
import SkillCategory from './aboutmeSkillCategory';

const skillsData = [
  {
    category: 'Machine Learning',
    skills: ['Python', 'Numpy', 'Pytorch', 'scikit-learn', 'pandas', 'OpenCV', 'OpenAI/gym'],
  },
  {
    category: 'Web Development',
    skills: [
      'Javascript/HTML/CSS',
      'ReactJS',
      'GraphQL',
      'React Native',
      'NodeJS',
      'SQL'
    ],
  },
  {
    category: 'Develeopement Tools',
    skills: [
      'Git/Github',
      'Subversion',
      'MS Visual Studio',
      'Visual Studio Code',
      'Adobe Photoshop',
    ],
  },
  {
    category: 'Other',
    skills: [
      'VueJS',
    'Angular',
    'NodeJS',
    'jQuery',
    'MongoDB',
    'D3',
    '.NET', 'Fluent in Mandarin'],
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
