import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context/States/GlobalState";
import "./assets/css/all.min.css";
ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);
