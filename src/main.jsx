import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/global.styles";
import { App } from './App'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>
);
