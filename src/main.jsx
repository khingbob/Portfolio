import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import loading from "./assets/loading.gif";
export const id = (id) => document.getElementById(id);
export const clas = (clas) => document.getElementsByClassName(clas);
document.documentElement.style.backgroundImage = `url(${loading})`;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
