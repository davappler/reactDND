import { useRef, useEffect } from "react";
import { useDrop } from "react-dnd";

import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";

export const Editor = () => {
  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: () => console.log("Item dropped!"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const editor = useRef();
  //   const anotherRef = useRef(drop);

  const backgroundColor = isOver ? "yellow" : "transparent";

  useEffect(() => {
    const startState = EditorState.create({
      doc: "Hello World",
      extensions: [keymap.of(defaultKeymap)],
    });

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div
      ref={(editor)}
      style={{
        border: "2px solid pink",
        backgroundColor,
        height: "100px",
      }}
    ></div>
  );
};
