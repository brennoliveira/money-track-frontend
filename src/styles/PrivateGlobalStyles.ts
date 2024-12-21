import { createGlobalStyle } from "styled-components";

const PrivateGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    // box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    // margin-left: -10px;
    // margin-right: 10px;
  }

  body {
    // display: flex;
    // flex-direction: column;
    background-color: #1e1e2f;
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    overflow: hidden;
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

export default PrivateGlobalStyle;
