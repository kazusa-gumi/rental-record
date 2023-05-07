import { useEffect } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import styles from "./Room.module.css";

type Props = {
  roomName: string;
};

export const Room = ({ roomName }: Props) => {
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
          {roomName}
        </div>
      </div>
    </div>
  );
};
