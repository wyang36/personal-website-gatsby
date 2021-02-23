import * as React from 'react';
import Layout from '../components/layout';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// markup
const Error404Page = ({ location }) => {
  return (
    <main>
      <Layout location={location}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 'calc(100vh - 130px)',
          }}
        >
          <FontAwesomeIcon icon={faHeartBroken} size="9x" />
          <h1>Oh no! This page doesn't exist.</h1>
        </div>
      </Layout>
    </main>
  );
};

export default Error404Page;
