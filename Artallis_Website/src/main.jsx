import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import React from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
//   <StrictMode>
//     <HashRouter basename="projetos_sg/Artallis/">
//       <App />
//     </HashRouter>
//   </StrictMode>
// );
