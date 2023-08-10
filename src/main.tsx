import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeUIProvider } from "theme-ui";
import type { Theme } from "theme-ui";

export const theme: Theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <App />
    </ThemeUIProvider>
  </React.StrictMode>
);
