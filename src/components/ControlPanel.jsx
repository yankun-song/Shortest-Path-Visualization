import React, { Component } from "react";
// import Box from "./Box";

class ControlPanel extends Component {
  render() {
    return (
      <div id="controlPanel">
        <button id="dijkstra">Dijkstra</button>
        <button
          id="bfs"
          onClick={() =>
            this.props.bfs([0, 0], this.props.setBoard, this.props.btns)
          }
        >
          BFS
        </button>
        <button id="dfs">DFS</button>
        <button id="reset-btn" onClick={() => this.props.setBoard()}>
          Reset
        </button>
      </div>
    );
  }
}

export default ControlPanel;
