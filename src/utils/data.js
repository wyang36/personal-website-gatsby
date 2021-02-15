import {
  faHome,
  faUser,
  faPalette,
  faBlog,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const MENUS = [
  {
    label: 'Home',
    link: '/',
    icon: faHome,
  },
  {
    label: 'About Me',
    link: '/about-me',
    icon: faUser,
  },
  {
    label: 'Projects',
    link: '/projects',
    icon: faPalette,
  },
  {
    label: 'Blog',
    link: '/blog',
    icon: faBlog,
  },
  {
    label: 'Contact Me',
    link: '/contact',
    icon: faPaperPlane,
  },
];

const Bold = ({ children }) => <span style={{ fontSize: 'bold' }}>{children}</span>;
const Text = ({ children }) => <p style={{ textAlign: 'left' }}>{children}</p>;

export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
  },
};
