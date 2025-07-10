import React from 'react';
import { Link as LinkOriginal, LinkProps } from 'react-scroll';

const ScrollLink = (props: LinkProps & { children?: React.ReactNode }) => {
  return React.createElement(LinkOriginal, props);
};

export default ScrollLink;
