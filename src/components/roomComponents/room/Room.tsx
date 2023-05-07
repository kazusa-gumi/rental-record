import { useEffect, useState } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import styles from "./Room.module.css";

type Props = {
  roomName?: string;
};

export const Room = ({ roomName }: Props) => {
  const [rooms, setRooms] = useState<Array<string>>([]);

  useEffect(() => {
    const grid = GridStack.init();
    return () => {
      grid.destroy();
    };
  }, []);

  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const content = event.currentTarget;
    content.contentEditable = "true";
    content.focus();
  };

  const handleDelete = (index: number) => {
    setRooms((prevRooms) => {
      const newRooms = prevRooms.filter((_, i) => i !== index);
      return newRooms;
    });

    // Remove the grid-stack-item from the Gridstack instance.
    const grid = GridStack.init();
    const content = document.querySelector(
      `.grid-stack-item-content[data-index="${index}"]`
    );
    if (content && content.parentElement) {
      grid.removeWidget(content.parentElement as HTMLElement);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const content = event.currentTarget;
    const index = parseInt(content.dataset.index || "0");
    setRooms((prevRooms) => {
      const newRooms = [...prevRooms];
      newRooms[index] = content.innerText;
      return newRooms;
    });
    content.contentEditable = "false";
  };

  const handleClick = () => {
    const newRoomName = roomName || `Room ${rooms.length + 1}`;
    setRooms((prevRooms) => [...prevRooms, newRoomName]);

    setTimeout(() => {
      const newItem = document.createElement("div");
      newItem.className = "grid-stack-item";
      newItem.setAttribute("data-gs-x", "0");
      newItem.setAttribute("data-gs-y", "0");
      newItem.setAttribute("data-gs-width", "4");
      newItem.setAttribute("data-gs-height", "4");

      const content = document.createElement("div");
      content.className = `grid-stack-item-content ${styles.widget1}`;
      content.innerText = newRoomName;
      content.setAttribute("data-index", rooms.length.toString());
      content.addEventListener("dblclick", handleDoubleClick);
      content.addEventListener("blur", handleBlur);

      // create the delete button and add it to the content
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";
      deleteButton.addEventListener("click", (event: MouseEvent) => {
        handleDelete(Number(content.getAttribute("data-index")));
      });

      content.appendChild(deleteButton);
      newItem.appendChild(content);

      const grid = GridStack.init();
      grid.addWidget(newItem);
    }, 100);
  };

  return (
    <>
      <button onClick={handleClick}>部屋を追加する</button>
      <div className="grid-stack"></div>
    </>
  );
};
