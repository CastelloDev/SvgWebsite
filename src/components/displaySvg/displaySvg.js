import React, { Component } from "react";

class DisplaySvg extends Component {
  render() {
    return (
      <div className="App">
        <div className="svg-item">
          <img
            src={this.props.dataUrl}
            width={this.props.width}
            height={this.props.height}
          />
        </div>
      </div>
    );
  }
}

export default DisplaySvg;
