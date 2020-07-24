import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 183px;
    height: 24px;
  }

  > p {
    font-size: 12px;
    color: blue;
  }

`;

export const ExternalLinks = styled.div`
  display: flex;
  margin-top: 15px;
  padding-left: 5px;
  margin-bottom: 25px;
`;

export const Topics = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-right: 80px;

  p {
    margin-top: 10px;
  }

  @media(max-width: 1140px) {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 15px;
    }

    p {
       display: none;
     }
  }

`;

export const Subscribe = styled.div`
  border-left: 1px solid #d3d3d3;
  padding-left: 15px;

  > p {
    margin-top: 15px;
    font-size: 12px;
  }

  @media(max-width: 1140px) {
    display: none;
  }
`;

export const Subs = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  > p {
    margin-left: 10px;
  }
`

export const Language = styled.div`

  border-top: 1px solid #d3d3d3;
  margin-top: 10px;

  > p {
    font-size: 12px;
    margin-top: 12px;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  align-content: center;
  width: 95%;
  margin: auto;
  max-width: 100%;

  > span {
    font-size: 12px;
    color: gray;
  }
`;