import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <button
        style={{
          backgroundColor: this.props.individualBtn
            ? this.props.individualBtn.color
            : "grey",
        }}
        className="box"
        onClick={() => {
          this.props.setCondition(this.props.rowNum, this.props.colNum);
          console.log(this.props.rowNum, this.props.colNum);
        }}
      ></button>
    );
  }
}

export default Box;
