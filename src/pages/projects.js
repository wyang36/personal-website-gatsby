import * as React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';

// markup
const ProjectsPage = ({ location, data }) => {
  return (
    <main>
      <Layout location={location}>
        <Projects data={data?.allContentfulProject.edges} />
      </Layout>
    </main>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectQuery {
    allContentfulProject(sort: { fields: completeDate, order: DESC }) {
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
