import { memo, useState } from "react";
import type { ReactNode } from "react";
import type { Coordinates } from "@dnd-kit/utilities";
import {
  DndContext,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensors,
  useDraggable,
} from "@dnd-kit/core";

import { Draggable } from "./Draggable";
import { Wrapper } from "./Wrapper";

const defaultCoordinates = {
  x: 0,
  y: 0,
};

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

type DraggableItemPropsType = {
  top?: number;
  left?: number;
};

export const DraggableStory = memo((): JSX.Element => {
  const [{ x, y }, setCoordinates] = useState<Coordinates>(defaultCoordinates);

  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(keyboardSensor);

  const DraggableItem = ({ top, left }: DraggableItemPropsType) => {
    const { attributes, isDragging, listeners, setNodeRef, transform } =
      useDraggable({
        id: "draggable",
      });

    return (
      <Draggable
        ref={setNodeRef}
        dragging={isDragging}
        listeners={listeners}
        style={{ top, left }}
        transform={transform}
        {...attributes}
      />
    );
  };

  return (
    <DndContext
      // sensors={sensors}
      onDragEnd={({ delta }) => {
        setCoordinates(({ x, y }) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
    >
      <Wrapper>
        <DraggableItem top={y} left={x} />
      </Wrapper>
    </DndContext>
  );
});

DraggableStory.displayName = "DraggableStory";
