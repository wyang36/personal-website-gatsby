import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { richTextOptions } from '../utils/data';

const styles = {
  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    width: 'calc(100vw - 40px)',
    margin: 'auto',
    paddingTop: '100px',
  },
  projectCard: {
    width: 'calc(100% - 40px)',
    margin: '20px auto',
    border: '1px solid',
    textAlign: 'center',
    padding: '10px 20px',
  },
  status: {
    margin: '10px 0',
    fontSize: '10pt',
  },
  lowerContainer: { display: 'flex', flexWrap: 'wrap' },
  image: {
    width: '40%',
    minWidth: '260px',
    margin: '15px',
  },
  paragraphContainer: {
    margin: '10px',
    lineHeight: '20px',
    maxWidth: '60vw',
    width: '50%',
    minWidth: '260px',
  },
  links: {
    margin: '10px 0px',
  },
  link: {
    padding: '10px 15px',
    border: '2px solid',
    borderRadius: '3px',
    display: 'inline-block',
    textDecoration: 'none',
    margin: '0 5px',
  },
  technologies: {
    margin: '10px 0px',
  },
  technology: {
    display: 'inline-block',
    borderRadius: '3px',
    textTransform: 'uppercase',
    fontSize: '10px',
    padding: '7px 7px 5px',
    margin: '2px',
    letterSpacing: '0.5px',
  },
};

const Project = ({ data, theme }) => {
  const {
    node: { title, description, codeLink, demoLink, status, technologies, image },
  } = data;
  return (
    <div style={{ ...styles.projectCard, borderColor: theme.colorContent0 }}>
      <h2 style={{ color: theme.colorContent1 }}>{title}</h2>
      <div style={styles.status}>
        Status:&nbsp;
        <span
          style={{ color: status === 'Completed' ? theme.colorCompleted : theme.colorInProgress }}
        >
          {status}
        </span>
      </div>
      <div style={styles.lowerContainer}>
        <img src={image.file.url} style={styles.image} />
        <div style={styles.paragraphContainer}>
          <div style={styles.links}>
            <a
              href={demoLink}
              style={{ ...styles.link, color: theme.colorContent1 }}
              target="_blank"
            >
              Demo
            </a>
            <a
              href={codeLink}
              style={{ ...styles.link, color: theme.colorContent1 }}
              target="_blank"
            >
              Code
            </a>
          </div>
          <div>{renderRichText(description, richTextOptions)}</div>
          <div style={styles.technologies}>
            {technologies.map((technology, index) => (
              <div
                key={index}
                style={{
                  ...styles.technology,
                  backgroundColor: theme.colorTheme0,
                  color: theme.colorContent2,
                }}
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Projects({ data, theme }) {
  return (
    <div style={styles.projectContainer}>
      {data.map((project, index) => (
        <Project data={project} theme={theme} key={index} />
      ))}
    </div>
  );
}
