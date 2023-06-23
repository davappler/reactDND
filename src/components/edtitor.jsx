import { useRef, useEffect } from "react";

import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";

import { useDrop } from "react-dnd";

export const Editor = () => {
  //   //   const [{ isOver }, drop] = useDrop({
  //       accept: "item",
  //       drop: () => console.log("Item dropped!"),
  //       collect: (monitor) => ({
  //         isOver: monitor.isOver(),
  //       }),
  //     });

  const editor = useRef();

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
      ref={editor}
      style={{
        border: "2px solid pink",
      }}
    ></div>
  );
};
