import React, { Component } from "react";
import Row from "./Row";

class Board extends Component {
  render() {
    const res = [];
    for (let i = 0; i < 30; i++) {
      res.push(<Row></Row>);
    }
    return <>{res}</>;
  }
}

export default Board;
