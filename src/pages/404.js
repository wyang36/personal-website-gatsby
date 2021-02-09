import * as React from 'react';
import Layout from '../components/layout';

// styles
const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
// markup
const Error404Page = ({ location }) => {
  return (
    <main style={pageStyles}>
      <Layout location={location}></Layout>
    </main>
  );
};

export default Error404Page;
