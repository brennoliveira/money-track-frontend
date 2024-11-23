import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
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
