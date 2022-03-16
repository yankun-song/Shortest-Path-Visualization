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
          rowBtns={this.props.btns.slice(i * 60, i * 60 + 60)}
          setCondition={this.props.setCondition}
        />
      );
    }

    return <>{res}</>;
  }
}

export default Board;
