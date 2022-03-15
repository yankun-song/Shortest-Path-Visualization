import React, { Component } from "react";
import Board from "./Board";
import ControlPanel from "./ControlPanel";

class PathFinder extends Component {
  // constructor() {}
  render() {
    return (
      <>
        <ControlPanel />
        <Board />
      </>
    );
  }
}

export default PathFinder;