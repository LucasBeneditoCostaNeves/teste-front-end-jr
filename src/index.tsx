import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GenericoProvider } from "./context/context";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <GenericoProvider>
        <App />
      </GenericoProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error("Element with ID 'root' not found in the document.");
}
