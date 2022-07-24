import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    button {
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;

export const Container = styled.div`
  width: 1140px;
  margin: auto;

  @media (max-width: 1300px) {
    width: 1000px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
