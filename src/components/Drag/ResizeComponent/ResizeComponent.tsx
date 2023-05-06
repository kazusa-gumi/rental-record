import React, { useState } from "react";
import { Draggable, Axis } from "../Draggable";

export const ResizableComponent = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const handleResize = (newWidth: number, newHeight: number) => {
    setWidth(newWidth);
    setHeight(newHeight);
  };

  return (
    <div>
      <Draggable
        axis={Axis.All}
        width={width}
        height={height}
        onResize={handleResize}
        label="Resizable Component"
      />
    </div>
  );
};
