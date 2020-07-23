import React from 'react';
import Header from '../Header';
import MainContent from '../MainContent';
import More from '../More';
import Footer from '../Footer'
import * as S from './style';

const Layout = () => {
  return (
    <S.Container> 
      <Header />
      <MainContent />
      <More />
      <Footer />
    </S.Container>
  );
}

export default Layout;