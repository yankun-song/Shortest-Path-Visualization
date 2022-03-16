import React, { Component } from "react";
import Row from "./Row";

class Board extends Component {
  render() {
    const res = [];
    for (let i = 0; i < 30; i++) {
      res.push(
        <Row
          key={`row${i}`}
          rowNum={i}
          btns={this.props.btns}
          setCondition={this.props.setCondition}
        />
      );
    }

    return <>{res}</>;
  }
}

export default Board;
