import * as React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';

// styles
const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const ProjectsPage = ({ location, data }) => {
  return (
    <main style={pageStyles}>
      <Layout location={location}>
        <Projects data={data?.allContentfulProject.edges} />
      </Layout>
    </main>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectQuery {
    allContentfulProject {
      edges {
        node {
          title
          description {
            raw
          }
          image {
            title
            description
            file {
              url
            }
          }
          technologies
          demoLink
          codeLink
          status
        }
      }
    }
  }
`;
