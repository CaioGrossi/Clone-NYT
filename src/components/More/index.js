import React from 'react';
import * as S from './style';

import {news, editorpicks, popular} from './content';

const More = () => {
  return (
    <S.Wrapper>
      <S.MoreNews>

        <h4>More in Space and Astronomy</h4>
        <S.News>
          {news.map(n => (
            <S.New key={n.id}>
              <img src={n.image} alt={n.title}></img>
              <p>{n.title}</p>
              <span>{n.time}</span>
            </S.New>
          ))}
        </S.News>

        <h4>Editor Pick's</h4>
        <S.Picks>
          {editorpicks.map(p => (
            <S.New key={p.id}>
              <img src={p.image} alt={p.title}></img>
              <p>{p.title}</p>
              <span>{p.time}</span>
            </S.New>
          ))}
        </S.Picks>

      </S.MoreNews>

      <S.MostPopular>
        <h4>Most Popular</h4>
        {popular.map(pop => (
          <p key={pop.id}>{pop.title}</p>
        ))}
      </S.MostPopular>
    </S.Wrapper>
  );
}

export default More;