import React, { ReactNode, useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import { memo } from "react";

export const DndContextComponent = memo((): JSX.Element => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = <Draggable id="draggable">ROOM</Draggable>;

  function handleDragEnd(event: { over: any }) {
    const { over } = event;
    // ドロップできる領域にドロップした時、親としてidをセット
    // それ以外はnullにする
    setParent(over ? over.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
      {containers.map((id) => (
        // idを受け取ったらDroppableコンポーネントを更新
        // useDroppable にpropsを渡す
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : "和室"}
        </Droppable>
      ))}
    </DndContext>
  );
});
