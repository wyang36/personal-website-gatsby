import * as React from 'react';
import Layout from '../components/layout';
// import Projects from '../components/projects';

// styles
const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const ProjectsPage = ({ location }) => {
  return (
    <main style={pageStyles}>
      <Layout location={location}>
        <div />
      </Layout>
    </main>
  );
};

export default ProjectsPage;
