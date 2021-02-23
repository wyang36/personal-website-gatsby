import React, { Fragment } from 'react';
import Layout from '../components/layout';
import Contact from '../components/contact';

// markup
const ContactPage = ({ location, data }) => {
  return (
    <Fragment>
      <main>
        <Layout location={location}>
          <Contact resume={data.contentfulAsset} />
        </Layout>
      </main>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        action="/success"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <div>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </div>
      </form>
    </Fragment>
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
