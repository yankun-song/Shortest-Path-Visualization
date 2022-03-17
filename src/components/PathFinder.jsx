import React, { Component } from "react";
import Board from "./Board";
import ControlPanel from "./ControlPanel";

import BFS from "./../algos/bfs";

class PathFinder extends Component {
  constructor() {
    super();
    this.state = {
      btns: {},
      start: "",
      end: "",
      count: 0,
    };
    this.setBoard = this.setBoard.bind(this);
    this.setCondition = this.setCondition.bind(this);
  }

  componentDidMount() {
    this.setBoard();
  }

  setBoard() {
    const btns = {};
    const defaultBtn = {
      isVisited: false,
      isStart: false,
      isEnd: false,
      isBlock: false,
      color: "#c2d6d6",
    };
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 60; j++) {
        const key = `r${i}c${j}`;
        btns[key] = JSON.parse(JSON.stringify(defaultBtn));
      }
    }
    this.setState({
      btns,
      start: "",
      end: "",
      count: 0,
    });
  }

  setCondition(pos, finding = false) {
    const [i, j] = pos;
    const key = `r${i}c${j}`;
    const newState = JSON.parse(JSON.stringify(this.state));

    if (!finding) {
      if (newState.count === 0) {
        newState.btns[key].isStart = true;
        newState.btns[key].color = "red";
        newState.start = pos;
        newState.count += 1;
        this.setState(newState);
        return;
      }
      if (newState.count === 1) {
        newState.btns[key].isEnd = true;
        newState.btns[key].color = "green";
        newState.end = pos;
        newState.count += 1;
        this.setState(newState);
        return;
      }
      // treat as a block
      newState.btns[key].isBlock = true;
      newState.btns[key].color = "black";
      newState.count += 1;
      this.setState(newState);
      return;
    } else {
      if (newState.btns[key].isStart) return;
      newState.btns[key].isVisited = true;
      newState.btns[key].color = "yellow";
      this.setState(newState);
      return;
    }
  }

  bfs(start, end, cb, btns) {
    BFS(start, end, cb, btns);
  }

  render() {
    return (
      <>
        <ControlPanel
          start={this.state.start}
          end={this.state.end}
          btns={this.state.btns}
          setBoard={this.setBoard}
          setCondition={this.setCondition}
          bfs={this.bfs}
        />
        <Board btns={this.state.btns} setCondition={this.setCondition} />
      </>
    );
  }
}

export default PathFinder;
