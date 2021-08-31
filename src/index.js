import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import setupMockServer from "./api/mock.server";
import { CartContext } from "./Context/CartContext";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContext>
        <App />
      </CartContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
