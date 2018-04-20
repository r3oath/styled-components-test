import React from 'react';
import styled, { css } from 'styled-components';

export default function createCard(content) {
  return class Card extends React.Component {
    render() {
      const { src, ...props } = this.props;

      return (
        <Block {...props}>
          <Image src={src} />
          <Content>{content}</Content>
        </Block>
      );
    }
  };
}

const Block = styled.div`
  align-items: center;
  display: inline-flex;
  background-color: rgb(230, 230, 230);
`;

const Image = styled.img`
  max-width: 20rem;
`;

const Content = styled.div`
  padding: 1rem;
  max-width: 20rem;
`;
