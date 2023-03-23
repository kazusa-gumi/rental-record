import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import { memo } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

export const Droppable = memo(({ children, id }: Props): JSX.Element => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
});

Droppable.displayName = "Droppable";
