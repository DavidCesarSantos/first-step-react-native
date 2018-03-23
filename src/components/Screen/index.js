import React from 'react';

import Paragraph from '../Paragraph';
import { Wrapper } from './styles';

//isVerticalCentered
export default props => (
  <Wrapper isVerticalCentered={props.isVerticalCentered}>
    <Paragraph>{props.title}</Paragraph>
    {props.children}
  </Wrapper>
);
