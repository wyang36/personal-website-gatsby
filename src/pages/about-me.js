import * as React from 'react';
import Layout from '../components/layout';
import AboutMe from '../components/aboutme';

// markup
const AboutMePage = ({ location, data }) => {
  return (
    <main>
      <Layout location={location}>
        <AboutMe image={data.contentfulAsset} />
      </Layout>
    </main>
  );
};

export default AboutMePage;

export const query = graphql`
  query ImageQuery {
    contentfulAsset(contentful_id: { eq: "5gsF4mQP2kMvRTrtSUGj8w" }) {
      title
      description
      file {
        url
      }
    }
  }
`;
