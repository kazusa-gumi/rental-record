import React, { useEffect } from "react";
import GridStack from "gridstack";
import "gridstack/dist/gridstack.min.css";
import styles from "./GridStackComponent.module.css";

export const GridStackComponent = () => {
  useEffect(() => {
    const grid = GridStack.init();
    return () => {
      grid.destroy();
    };
  }, []);

  return (
    <div className="grid-stack">
      <div
        className="grid-stack-item"
        data-gs-x="0"
        data-gs-y="0"
        data-gs-width="4"
        data-gs-height="4"
      >
        <div className={`grid-stack-item-content ${styles.widget1}`}>
          ウィジェット1
        </div>
      </div>
      <div
        className="grid-stack-item"
        data-gs-x="4"
        data-gs-y="0"
        data-gs-width="4"
        data-gs-height="4"
      >
        <div className={`grid-stack-item-content ${styles.widget2}`}>
          ウィジェット2
        </div>
      </div>
    </div>
  );
};
