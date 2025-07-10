import React from 'react';
import { Element as ElementOriginal } from 'react-scroll';

type Props = {
  name: string;
  children?: React.ReactNode;
};

const ScrollElement = (props: Props) => {
  return React.createElement(ElementOriginal, props);
};

export default ScrollElement;
