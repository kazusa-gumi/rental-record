import { DndContext, useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { memo } from "react";

type Props = {
  id: string;
  children: ReactNode;
};

export const DragAndDrop = memo(({ id, children }: Props): JSX.Element => {
  const { setNodeRef } = useDroppable({ id: id });
  return (
    <SortableContext items={["A", "B"]}>{children}</SortableContext>
    // <SortableContext items={rooms} strategy={rectSortingStrategy}>
    //   <div ref={setNodeRef}>
    //   {rooms.map((id: string) => (
    //         <div key={id}>{children}</div>
    //       ))}
    //   </div>
    // </SortableContext>
  );
});

DragAndDrop.displayName = "DragAndDrop";
