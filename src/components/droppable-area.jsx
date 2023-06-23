import { useDrop } from "react-dnd";

const DroppableArea = () => {
  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: () => console.log("Item dropped in editorrr!"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const backgroundColor = isOver ? "yellow" : "transparent";

  return (
    <div
      ref={drop}
      style={{ backgroundColor, height: "200px", border: "2px solid green" }}
    >
      Drop here in the box
    </div>
  );
};

export default DroppableArea;
