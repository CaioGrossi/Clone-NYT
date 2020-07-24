import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
`;

export const MoreNews = styled.div`
  width: 66%;
  margin-right: 0;

  > h4 {
    margin: 15px 0px;
    padding-top: 10px;
    border-top: 1px solid black;
  }

  @media(max-width: 740px) {
    width: 100%;
  }
`;

export const News = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 70px;
  grid-column-gap: 20px;

  @media(max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
  } 
`;

export const Picks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;

  @media(max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
  } 
`;

export const New = styled.div`

  > img {
    max-width: 100%;
  }

  > span {
    color: gray;
    font-size: 13px;
  }
`

export const MostPopular = styled.div`
  width: 34%;
  margin-left: 25px;

  > h4 {
    margin: 15px 0px;
    padding-top: 10px;
    border-top: 1px solid black;
  }

  > p {
    font-size: 18px;
    text-align: justify;
    border-top: 1px solid #d3d3d3;
    padding: 22px 0;
  }

  @media (max-width: 740px) {
    display: none;
  }
`;