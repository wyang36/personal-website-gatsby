import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { richTextOptions } from '../utils/data';

const styles = {
  blogContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    width: 'calc(100vw - 40px)',
    margin: 'auto',
    paddingTop: '100px',
  },
  blogCard: {
    width: 'calc(100% - 40px)',
    margin: '20px auto',
    borderBottom: '1px solid',
    textAlign: 'center',
    padding: '10px 20px',
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
};

const BlogPost = ({ data, theme }) => {
  const {
    node: { title, content, image, created },
  } = data;
  return (
    <div style={{ ...styles.blogCard, borderColor: theme.colorContent0 }}>
      <h2 style={{ color: theme.colorContent1 }}>{title}</h2>
      <p style={{ color: theme.colorContent2 }}>{new Date(created).toDateString()}</p>
      <div style={styles.lowerContainer}>
        <img src={image.file.url} style={styles.image} alt={image.description} />
        <div style={styles.paragraphContainer}>
          <div>{renderRichText(content, richTextOptions)}</div>
        </div>
      </div>
    </div>
  );
};
export default function Blog({ data, theme }) {
  return (
    <div style={styles.blogContainer}>
      {data.map((project, index) => (
        <BlogPost data={project} theme={theme} key={index} />
      ))}
    </div>
  );
}
