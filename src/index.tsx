import "normalize.css";
import Inicio from "pages/Inicio";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);