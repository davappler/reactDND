import DraggableItem from "./draggable-item";
import DroppableArea from "./droppable-area";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function MainComp() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <DraggableItem name="Item 1" />
        {/* <DraggableItem name="Item 2" /> */}
        <DroppableArea />
      </div>
    </DndProvider>
  );
}

export default MainComp;
