import * as React from 'react';
import { DragAndDrop } from "@progress/kendo-react-common";
import { DraggableButton } from "./draggable-button";
import { DroppableBox } from "./droppable-box";

  export default function DragDrop() {

    const [box, setBox] = React.useState("A");
    const handleDrop = React.useCallback((id) => {
      setBox(id);
    }, []);

    return (
    <div
      style={{
        height: 200,
        display: "grid",
        gridGap: 30,
        gridTemplateColumns: "45% 45%",
      }}
    >
      <DragAndDrop>
        <DroppableBox selected={box === "A"} id="A" onDrop={handleDrop}>
        <h3>Unit Alpha</h3>
          {box === "A" ? <DraggableButton /> : null}
        </DroppableBox>
        <DroppableBox selected={box === "B"} id="B" onDrop={handleDrop}>
        <h3>Unit Beta</h3>
          {box === "B" ? <DraggableButton /> : null}
        </DroppableBox>
        <DroppableBox selected={box === "C"} id="C" onDrop={handleDrop}>
        <h3>Unit Delta</h3>
          {box === "C" ? <DraggableButton /> : null}
        </DroppableBox>
        <DroppableBox selected={box === "D"} id="D" onDrop={handleDrop}>
        <h3>Unit Gamma</h3>
          {box === "D" ? <DraggableButton /> : null}
        </DroppableBox>
      </DragAndDrop>
    </div>)
  }
