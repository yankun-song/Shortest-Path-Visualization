import React, { Component } from "react";
import Box from "./Box";

class Row extends Component {
  render() {
    const res = [];
    for (let i = 0; i < 60; i++) {
      res.push(<Box />);
    }
    return <div className="row">{res}</div>;
  }
}

export default Row;
