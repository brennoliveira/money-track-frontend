import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
