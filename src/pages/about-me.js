import * as React from 'react';
import Layout from '../components/layout';

// styles
const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
// markup
const AboutMePage = ({ location }) => {
  return (
    <main style={pageStyles}>
      <Layout location={location}></Layout>
    </main>
  );
};

export default AboutMePage;
