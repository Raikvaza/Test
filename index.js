import React from "react";
import App from "./src/App";
import { createRoot } from "react-dom/client";
import store from "./src/features/store/store";
import { Provider } from "react-redux";
import "./index.css";
// Import all of Bootstrap's JS
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
