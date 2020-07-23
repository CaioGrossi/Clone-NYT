import React from 'react';
import * as S from './style';
import Image from '../../assets/images/MainImage.jpg';
import Report from '../Report';

const MainContent = () => {
  return (
    <S.Container>
      <h1>Space Ripples Reveal Big Bang’s Smoking Gun</h1>

      <S.MainImage>
        <img src={Image} alt="cosmos"></img>
        <p>
          Alan Guth was one of the first physicists to hypothesize the existence of inflation, 
          which explains how the universe expanded so uniformly and so quickly in the instant 
          after the Big Bang 13.8 billion years ago. <span>Rick Friedman for The New York Times</span>
        </p>
      </S.MainImage>

      <Report />
      
    </S.Container>
  );
}

export default MainContent;