import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { memo } from "react";

type Props = {
  id: string;
  children: ReactNode;
};

export const Draggable = memo(({ id, children }: Props): JSX.Element => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
});
