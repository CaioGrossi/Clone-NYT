import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  background-color: white;
  padding: 4px 20px;
  border-bottom: 1px solid #e2e2e2;

  > img {
    width: 183px;
    height: 24px;
    flex-grow: .9;
  }

  > button {
    background-color: rgb(86, 123, 149);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 8px;
  }

  .loginIcon {
    display: none;
  }

  @media(max-width: 1020px) {

    button {
      display: none;
    }

    .searchIcon {
      display: none;
    }

    .loginIcon {
      display: inline;
    }
  }

`;