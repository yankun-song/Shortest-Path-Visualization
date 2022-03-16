import React, { Component } from "react";

class Box extends Component {
  render() {
    const key = `r${this.props.rowNum}c${this.props.colNum}`;
    return (
      <button
        style={{
          backgroundColor: this.props.btns[key]
            ? this.props.btns[key].color
            : "grey",
        }}
        className="box"
        onClick={() => {
          this.props.setCondition([this.props.rowNum, this.props.colNum]);
        }}
      ></button>
    );
  }
}

export default Box;
