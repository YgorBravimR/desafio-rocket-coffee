import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    background: ${({ theme }) => theme.colors["base-bg"]};
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Manrope', sans-serif;
    height: 100vh;

}

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
