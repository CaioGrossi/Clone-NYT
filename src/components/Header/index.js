import React from 'react';
import * as S from './style';
import NYTLogo from '../../assets/images/nyt-logo-185x26.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

function Header () {
  return (
    <S.Header>
      <FiMenu />
      <AiOutlineSearch />
      <img src={NYTLogo} alt="new york times logo"></img>
      <button>SUBSCRIBE NOW</button>
      <button>LOG IN</button>
    </S.Header>
  );
}
 export default Header;