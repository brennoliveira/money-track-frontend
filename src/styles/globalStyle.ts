import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    // box-sizing: border-box;
  }

  html, #root {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }

  button {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export default GlobalStyle;
