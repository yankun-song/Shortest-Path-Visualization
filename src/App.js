import React from "react";
import "./App.css";
import PathFinder from "./components/PathFinder";

function App() {
  return (
    <div className="App">
      {/* <PathfindingVisualizer /> */}
      <div id="PathFinder">
        <PathFinder />
      </div>
    </div>
  );
}

export default App;
