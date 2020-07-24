import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 60px;

  > h1 {
    margin-left: 100px;
    margin-right: 0px;
    width: 60%;
  }

  @media(max-width: 768px ) {
    width: 100%;

     h1  {
       width: 80%;
       margin: auto;
     }
  }


`;

export const MainImage = styled.div`

  margin-top: 30px;

  > img {
    width:100%;
  }

  > p {
    color: gray;
    width: 80%;
  }

  span {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    p {
      margin-left: 15px;
    }
  }
`;