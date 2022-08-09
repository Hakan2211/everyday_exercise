import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { ColorProvider } from "./hooks/color-hooks";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
);
