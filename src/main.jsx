import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App";
import { Fragment } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <Reset />
    <App />
  </Fragment>
);
