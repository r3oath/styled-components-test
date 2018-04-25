// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  content: {
    primary: React.Node, 
    metadata: React.Node
  },
  src: string,
  modifiers: {
    primary?: boolean,
  }
};

export default class Card extends React.Component<Props> {
  render() {
    const { src, content, ...props } = this.props;

    return (
      <Block {...props}>
        <Image src={src}/>
        <MetaData>{content.metadata}</MetaData>
        <Content>{content.primary}</Content>
      </Block>
    );
  }
}

const Block = styled.div`
  align-items: center;
  display: inline-flex;
  background-color: rgb(230, 230, 230);

  ${props => props.modifiers.primary && css`
    border: 1px solid red;
  `}
`;

const Image = styled.img`
  max-width: 20rem;
`;

const MetaData = styled.div`
  font-size: 0.9rem;
  color: red;
`;

const Content = styled.div`
  padding: 1rem;
  max-width: 20rem;
`;
