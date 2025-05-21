import FileAdd from "@spectrum-icons/workflow/FileAdd";
import "./App.css";
import { Button, DropZone } from "@adobe/react-spectrum";

export const App = () => {
  return (
    <div className="container w-full h-full grid place-items-center">
      <div className="flex w-full h-full">
        <DropZone flexGrow={1}>
          <div className="flex flex-col items-center gap-2">
            <FileAdd size="XL" />
            <p className="text-neutral-500 text-xs font-bold mb-4">Drop your files here</p>
          </div>
        </DropZone>
      </div>
    </div>
  );
};

