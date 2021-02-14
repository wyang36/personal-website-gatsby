import * as React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';

// markup
const IndexPage = ({ location }) => {
  return (
    <main>
      <Layout location={location}>
        <Intro />
      </Layout>
    </main>
  );
};

export default IndexPage;
