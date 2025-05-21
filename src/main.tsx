import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./prelude.css";
import { TitleBar } from "./components/TitleBar";
import { ThemeProvider } from "./lib/theme-provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <div className="flex flex-col h-full">
        <TitleBar />
        <main className="grow w-full h-full">
          <App />
        </main>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);
