import "./App.css";
import { IconInbox } from "@intentui/icons"
import { useState } from "react";
import { DropZoneTauri } from "./components/drop-zone-tauri";

export const App = () => {
  const handleDrop = (paths: string[]) => {
    console.log("Dropped files/folders:", paths);
  };

  return (
    <div className="container w-full h-full">
      <div className="flex w-full h-full">
        <DropZoneTauri className="w-full" onDrop={handleDrop}>
          <IconInbox className="size-12 text-neutral-500" />
          <p className="text-neutral-500">Drop files/folders here</p>
        </DropZoneTauri>
      </div>
    </div>
  );
};

