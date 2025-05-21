import Close from "@spectrum-icons/workflow/Close";
import Remove from "@spectrum-icons/workflow/Remove";

export const TitleBar = () => {
  return (
    <div data-tauri-drag-region className="flex items-center justify-between h-10 px-3 bg-neutral-900 text-white">
      <h1 className="text-md">Grasp</h1>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer">
          <Remove size="S" />
        </button>
        <button className="cursor-pointer">
          <Close size="S" />
        </button>
      </div>
    </div>
  );
};
