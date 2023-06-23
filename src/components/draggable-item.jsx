import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import footy3 from "../assets/footy3.jpg";

function DraggableItem() {
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity, border: "2px solid black", padding: "2px" }}
    >
      <img
        src={footy3}
        style={{
          height: "100px",
          width: "100px",
        }}
      />
    </div>
  );
}

DraggableItem.propTypes = {
  name: PropTypes.string,
};

export default DraggableItem;
