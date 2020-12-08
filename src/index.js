import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import PageStore from "./store";

import Editor from "./pages/editor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.render(
  <Provider pageStore={new PageStore()}>
    <DndProvider backend={HTML5Backend}>
      <Editor />
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);
