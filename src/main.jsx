import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ProjectsProvider } from "./context/ProjectsContext";
import "./styles.css";

// Providers share state across routes without passing props through every level.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ProjectsProvider>
          <App />
        </ProjectsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
