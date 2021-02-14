import * as React from 'react';
import Layout from '../components/layout';
import Blog from '../components/blog';

// markup
const BlogPage = ({ location, data }) => {
  return (
    <main>
      <Layout location={location}>
        <Blog data={data?.allContentfulBlogPost.edges} />
      </Layout>
    </main>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          created
          image {
            title
            description
            file {
              url
            }
          }
          content {
            raw
          }
        }
      }
    }
  }
`;
