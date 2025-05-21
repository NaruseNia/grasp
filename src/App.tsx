import "./App.css";
import { DropZone } from "./components/drop-zone";
import { IconInbox } from "@intentui/icons"

export const App = () => {
  return (
    <div className="container w-full h-full grid place-items-center">
      <div className="flex w-full h-full">
        <DropZone className="w-full h-full">
          <IconInbox className="size-12 text-neutral-500" />
          <p className="text-neutral-500">Drop files/folders here</p>
        </DropZone>
      </div>
    </div>
  );
};

