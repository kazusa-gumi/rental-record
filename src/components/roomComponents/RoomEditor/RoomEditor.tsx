import { useEffect, useState } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import styles from "./Room.module.css";
import { Room } from "../Room";

export const RoomEditor = () => {
  const [showRoom, setShowRoom] = useState(false);

  const handleClick = () => {
    setShowRoom((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleClick}>部屋を追加する</button>
      {showRoom && <Room roomName="Sample Room" />}
    </>
  );
};
