import React from 'react';
import content from './content';
import * as S from './style';

const TheoryDescription = () => {
  return (
    <S.Wrapper>
      <h3>The Theory of Inflation</h3>
      <p>
        Astronomers have found evidence to support the theory of inflation, which explains how 
        the universe expanded so uniformly and so quickly in the instant after the Big Bang 13.8 
        billion years ago.
      </p>
      <S.WrapperImages>
        {content.map(content => (
          <S.Card key={content.id}>
            <img src={content.image} alt={content.title}></img>
            <p>
              <strong>{content.title}</strong> {content.description}
            </p>
          </S.Card>
        ))}
      </S.WrapperImages>

      <S.Footer>
        <span>By LARRY BUCHANAN and JONATHAN CORUM</span>
      </S.Footer>
    </S.Wrapper>
  );
}

export default TheoryDescription;