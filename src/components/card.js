// @flow

import * as React from "react";
import styled, { css } from "styled-components";

type Props = {
  content: {
    primary: React.Node,
    metadata: React.Node,
    imageUrl: string
  },
  modifiers: {
    primary?: boolean
  }
};

export default function Card({ content, ...props }: Props): React.Node {
  return (
    <Block {...props}>
      <Image src={content.imageUrl} />
      <MetaData>{content.metadata}</MetaData>
      <Content>{content.primary}</Content>
    </Block>
  );
}

const Block = styled.div`
  align-items: center;
  display: inline-flex;
  background-color: rgb(230, 230, 230);

  ${props =>
    props.modifiers.primary &&
    css`
      border: 1px solid red;
    `};
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
