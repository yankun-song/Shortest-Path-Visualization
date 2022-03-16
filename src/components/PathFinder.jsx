import React, { Component } from "react";
import Board from "./Board";
import ControlPanel from "./ControlPanel";

class PathFinder extends Component {
  constructor() {
    super();
    this.state = {
      btns: {},
      nextStart: "",
      nextEnd: "",
      start: "",
      end: "",
      blocks: {},
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
      visited: false,
      isStart: false,
      isEnd: false,
      isBlock: false,
      color: "#c2d6d6",
    };
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 60; j++) {
        const key = `r${i}c${j}`;
        console.log(key);
        btns[key] = JSON.parse(JSON.stringify(defaultBtn));
      }
    }
    this.setState({
      btns,
      nextStart: "",
      nextEnd: "",
      start: "",
      end: "",
      blocks: {},
    });
  }

  setCondition(i, j) {
    const key = `r${i}c${j}`;
    const newState = JSON.parse(JSON.stringify(this.state));
    if (newState.nextStart === "") {
      newState.btns[key].isStart = true;
      newState.btns[key].visited = true;
      newState.btns[key].color = "red";
      newState.start = key;
      newState.nextStart = false;
      this.setState(newState);
      return;
    }
    if (newState.nextEnd === "") {
      newState.btns[key].isEnd = true;
      newState.btns[key].visited = true;
      newState.btns[key].color = "green";
      newState.end = key;
      newState.nextEnd = false;
      this.setState(newState);
      return;
    }
    // treat as a block
    newState.btns[key].isBlock = true;
    newState.btns[key].color = "black";
    newState.blocks[key] = 1;
    this.setState(newState);
  }
  render() {
    return (
      <>
        <ControlPanel setBoard={this.setBoard} />
        <Board btns={this.state.btns} setCondition={this.setCondition} />
      </>
    );
  }
}

export default PathFinder;
