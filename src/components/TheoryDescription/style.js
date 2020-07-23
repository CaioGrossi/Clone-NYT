import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;

  > p {
    color: gray;
    margin-top: 4px;
    margin-bottom: 10px;
  }
`;

export const WrapperImages = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 12px;
  grid-column-gap: 12px;
  width: 100%;

  margin-bottom: 30px;

  font-size: 14px;
`;

export const Card = styled.div`
  > img {
    width: 100%;
  }
`;

export const Footer = styled.div`
  border-top: 1px solid black;
  padding-top: 10px;

  > span {
    font-size: 14px;
    color: gray;
  }
`;