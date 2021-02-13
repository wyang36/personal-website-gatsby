import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

const projectQuery = graphql`
  query getProjects {
    Projects {
      items {
        title
        description {
          json
        }
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        technologies
        demoLink
        codeLink
        status
      }
    }
  }
`;

const Projects = () => {};

export default Projects;
