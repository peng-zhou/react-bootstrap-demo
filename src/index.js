import React from "react";
import ReactDOM from "react-dom";
// import "./assets/styles/style.scss";
import "./assets/styles/style.scss";
import App from "./App";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
