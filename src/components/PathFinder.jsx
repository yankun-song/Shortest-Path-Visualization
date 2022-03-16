import React, { Component } from "react";
import Board from "./Board";
import ControlPanel from "./ControlPanel";

class PathFinder extends Component {
  constructor() {
    super();
    this.state = { btns: [], nextStart: "", nextEnd: "" };
    this.setBoard = this.setBoard.bind(this);
    this.setCondition = this.setCondition.bind(this);
  }

  componentDidMount() {
    this.setBoard();
  }

  setBoard() {
    const btns = [];
    const defaultBtn = {
      visited: false,
      isStart: false,
      isEnd: false,
      isBlock: false,
      color: "grey",
    };
    for (let i = 0; i < 1800; i++) {
      btns.push(JSON.parse(JSON.stringify(defaultBtn)));
    }
    this.setState({ btns, nextStart: "", nextEnd: "" });
    //console.log(this.state);
  }

  setCondition(rowNum, colNum) {
    const newState = JSON.parse(JSON.stringify(this.state));
    if (newState.nextStart === "") {
      newState.btns[rowNum * 60 + colNum].isStart = true;
      newState.btns[rowNum * 60 + colNum].visited = true;
      newState.btns[rowNum * 60 + colNum].color = "red";
      console.log("setCondition", rowNum, colNum);
      newState.nextStart = false;
      this.setState(newState);
      return;
    }
    if (newState.nextEnd === "") {
      newState.btns[rowNum * 60 + colNum].isEnd = true;
      newState.btns[rowNum * 60 + colNum].visited = true;
      newState.btns[rowNum * 60 + colNum].color = "green";
      newState.nextEnd = false;
      this.setState(newState);
      return;
    }
    // treat as a block
    newState.btns[rowNum * 60 + colNum].isBlock = true;
    newState.btns[rowNum * 60 + colNum].color = "black";
    this.setState(newState);
  }
  render() {
    return (
      <>
        <ControlPanel />
        <Board btns={this.state.btns} setCondition={this.setCondition} />
      </>
    );
  }
}

export default PathFinder;
