import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/_style.scss";
import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider } from "@emotion/react";
// import {theme as theme} from "./styles/theme.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //  <ThemeProvider theme={theme}>
      <Router>
       <App />
      </Router>
  //  </ThemeProvider>
);

