import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { defaultTheme, Provider } from "@adobe/react-spectrum";

import "./prelude.css";
import { TitleBar } from "./components/TitleBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider theme={defaultTheme}>
      <main className="w-full h-full">
        <TitleBar />
        <App />
      </main>
    </Provider>
  </React.StrictMode>,
);
