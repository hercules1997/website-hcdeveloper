import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/global.styles";
import { Page } from './Page'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
    <Global />
  </React.StrictMode>
);
