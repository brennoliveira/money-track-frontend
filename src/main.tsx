import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
