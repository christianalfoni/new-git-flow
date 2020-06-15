import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

console.log("foo")

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
