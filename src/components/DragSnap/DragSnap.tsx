import { memo, useState } from "react";
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

import { Draggable } from "../../components/Drag/Draggable";
import { Wrapper } from "../../components/Drag/Wrapper";
import classNames from "classnames";
import styles from "./DragSnap.module.css";
import { snapToGrid } from "../../lib/hooks";

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

export const DragSnap = memo((): JSX.Element => {
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
    <div className={classNames(styles.gridContainer, styles.grid)}>
      <div className="grid">
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
          modifiers={[snapToGrid]}
        >
          <Wrapper>
            <DraggableItem top={y} left={x} />
          </Wrapper>
        </DndContext>
      </div>
    </div>
  );
});

DragSnap.displayName = "DragSnap";
