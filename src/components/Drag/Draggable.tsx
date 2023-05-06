import React, { forwardRef, useEffect, useReducer, useState } from "react";
import classNames from "classnames";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";

import { Handle } from "./Handle";

import {
  draggable,
  draggableHorizontal,
  draggableVertical,
} from "./draggable-svg";
import styles from "./Draggable.module.css";

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

interface Props {
  axis?: Axis;
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  label?: string;
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  transform?: Transform | null;
  width: number;
  height: number;
  onResize?: (width: number, height: number) => void; // 追加
}

export const Draggable = forwardRef<HTMLButtonElement, Props>(
  function Draggable(
    {
      axis,
      dragOverlay,
      width = 100,
      height = 100,
      onResize,
      dragging,
      handle,
      label,
      listeners,
      transform,
      style,

      buttonStyle,
      ...props
    },
    ref
  ) {
    const [currentWidth, setCurrentWidth] = useState<number>(width);
    const [currentHeight, setCurrentHeight] = useState<number>(height);

    useEffect(() => {
      setCurrentWidth(width);
      setCurrentHeight(height);
    }, [width, height]);

    return (
      <div
        className={classNames(
          styles.Draggable,
          dragOverlay && styles.dragOverlay,
          dragging && styles.dragging,
          handle && styles.handle
        )}
        style={
          {
            ...style,
            "--translate-x": `${transform?.x ?? 0}px`,
            "--translate-y": `${transform?.y ?? 0}px`,
          } as React.CSSProperties
        }
      >
        <button
          {...props}
          aria-label="Draggable"
          data-cypress="draggable-item"
          {...(handle ? {} : listeners)}
          tabIndex={handle ? -1 : undefined}
          ref={ref}
          style={{ ...buttonStyle, width: currentWidth, height: currentHeight }}
        >
          {axis === Axis.Vertical
            ? draggableVertical
            : axis === Axis.Horizontal
            ? draggableHorizontal
            : draggable}
          {handle ? <Handle {...(handle ? listeners : {})} /> : null}

          <div
            className={styles.resizeHandle}
            data-draggable="false"
            tabIndex={-1}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();

              let startX = e.clientX;
              let startY = e.clientY;
              const handleMouseMove = (moveEvent: MouseEvent) => {
                const deltaX = moveEvent.clientX - startX;
                const deltaY = moveEvent.clientY - startY;
                startX = moveEvent.clientX;
                startY = moveEvent.clientY;
                setCurrentWidth((prevWidth) => prevWidth + deltaX);
                setCurrentHeight((prevHeight) => prevHeight + deltaY);
              };
              const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }}
          ></div>
        </button>
        {label ? <label>{label}</label> : null}
      </div>
    );
  }
);
