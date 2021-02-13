import * as React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';

// styles
const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = ({ location }) => {
  return (
    <main style={pageStyles}>
      <Layout location={location}>
        <Intro />
      </Layout>
    </main>
  );
};

export default IndexPage;
