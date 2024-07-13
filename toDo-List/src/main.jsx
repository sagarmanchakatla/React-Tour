import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Example from "./Navbar.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Example />
    <App />
  </React.StrictMode>
);
