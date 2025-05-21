import { IconX } from "@intentui/icons";
import { Button } from "./button";

export const TitleBar = () => {
  return (
    <div data-tauri-drag-region className="flex items-center justify-between h-10 px-3 bg-neutral-900 text-white">
      <h1 className="text-md">Grasp</h1>
      <div className="flex items-center gap-4">
        <Button size="square-petite" intent="plain">
          <IconX />
        </Button>
      </div>
    </div>
  );
};
