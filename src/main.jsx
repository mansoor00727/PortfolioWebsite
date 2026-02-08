import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // THIS MUST BE HERE
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
