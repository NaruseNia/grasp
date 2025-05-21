import { listen } from "@tauri-apps/api/event"
import { DragDropEvent } from "@tauri-apps/api/webview"
import { PropsWithChildren, useEffect } from "react"

type DropZoneProps = {
  className?: string,
  onDrop?: (paths: string[]) => void,
}

export const DropZoneTauri = ({ children, onDrop, className }: PropsWithChildren<DropZoneProps>) => {
  useEffect(() => {
    const unlistenDragDrop = listen("tauri://drag-drop", (event) => {
      const dropData = event.payload as { paths: string[] };
      if (dropData.paths.length > 0) {
        onDrop && onDrop(dropData.paths);
      }
    });

    return () => {
      unlistenDragDrop.then((unlisten) => unlisten());
    };
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center m-1 border border-dashed ${className}`}>
      {children}
    </div>
  )
}
