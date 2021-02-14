import * as React from 'react';
import Layout from '../components/layout';
import AboutMe from '../components/aboutme';

// markup
const AboutMePage = ({ location }) => {
  return (
    <main>
      <Layout location={location}>
        <AboutMe />
      </Layout>
    </main>
  );
};

export default AboutMePage;
