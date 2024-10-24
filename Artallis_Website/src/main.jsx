import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, BrowserRouter } from "react-router-dom";
import React from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>
);
//   <StrictMode>
//     <BrowserRouter basename="projetos_sg/Artallis">
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
