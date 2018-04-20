import React from 'react';
import styled, { css } from 'styled-components';

export default function createCard(content) {
  return class Card extends React.Component {
    render() {
      const { src, ...props } = this.props;

      return (
        <Card__block {...props}>
          <Card__image src={src} />
          <Card__content>{content}</Card__content>
        </Card__block>
      );
    }
  };
}

const Card__block = styled.div`
  align-items: center;
  display: inline-flex;
  background-color: rgb(230, 230, 230);
`;

const Card__image = styled.img`
  max-width: 20rem;
`;

const Card__content = styled.div`
  padding: 1rem;
  max-width: 20rem;
`;
