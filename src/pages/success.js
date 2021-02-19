import * as React from 'react';
import Layout from '../components/layout';
import Success from '../components/success';

// markup
const ContactSuccessPage = ({ location }) => {
  return (
    <main>
      <Layout location={location}>
        <Success />
      </Layout>
    </main>
  );
};

export default ContactSuccessPage;
