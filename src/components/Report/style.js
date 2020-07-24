import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 40px;
  
  > h2 {
    margin-bottom: 20px;
  }
`;

export const Header = styled.header`
  margin-bottom: 40px;
`;

export const IconInfo = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;

  > span {
    flex-grow: .6;
    color: gray;
    font-size: 15px;
  }

  > button {
    flex-grow: .6;
    background-color: rgb(86, 123, 149);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    padding: 8px;
    text-align: center;
  }
`;

export const ContentP = styled.div`
  font-size: 20px;

  > p {
    margin-bottom: 20px;
  }
`;

export const Thanks = styled.div`
  margin: 20px 0;
  text-align: center;

  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  padding: 15px 0;
`;

export const Media = styled.div`

  margin-bottom: 30px;

  > span {
    margin-top: 10px;
    font-size: 15px;
    color: gray;
  }

  > img {
    max-width: 100%;
  }

  > iframe {
    width: 100%;
  }
`;
export const Footer = styled.div`

  margin-bottom: 70px;

  > span {
    font-size: 13px;
    color: gray;
  }
`;
