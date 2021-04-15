import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (htmlElement) => {
  ReactDOM.render(<App />, htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
