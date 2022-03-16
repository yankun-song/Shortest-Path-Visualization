import React, { Component } from "react";
import Box from "./Box";

class Row extends Component {
  render() {
    const res = [];
    for (let i = 0; i < 60; i++) {
      res.push(
        <Box
          key={`col${i}`}
          rowNum={this.props.rowNum}
          colNum={i}
          individualBtn={this.props.rowBtns[i]}
          setCondition={this.props.setCondition}
        />
      );
    }
    return <div className="row">{res}</div>;
  }
}

export default Row;
