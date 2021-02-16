import * as React from 'react';
import Layout from '../components/layout';
import Contact from '../components/contact';

// markup
const ContactPage = ({ location, data }) => {
  return (
    <main>
      <Layout location={location}>
        <Contact resume={data.contentfulAsset} />
      </Layout>
    </main>
  );
};

export default ContactPage;

export const query = graphql`
  query FileQuery {
    contentfulAsset(contentful_id: { eq: "52yMc2rtMMMGQX9eIv3f8j" }) {
      title
      description
      file {
        url
      }
    }
  }
`;
