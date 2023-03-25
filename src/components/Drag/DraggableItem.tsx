import { useDraggable } from "@dnd-kit/core";
import { memo } from "react";

export const DraggableItem = memo(
  ({ axis, label, style, top, left, handle, buttonStyle }): JSX.Element => {
    const { attributes, isDragging, listeners, setNodeRef, transform } =
      useDraggable({
        id: "draggable",
      });

    return (
      <Draggable
        ref={setNodeRef}
        dragging={isDragging}
        handle={handle}
        label={label}
        listeners={listeners}
        style={{ ...style, top, left }}
        buttonStyle={buttonStyle}
        transform={transform}
        axis={axis}
        {...attributes}
      />
    );
  }
);
