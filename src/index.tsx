import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import StoreProvider from "./stores/taskBoardStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>
);
