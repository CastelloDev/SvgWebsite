import React, { Component } from "react";

class DisplaySvg extends Component {
  render() {
    return (
      <div>
          <img
            src={this.props.dataUrl}
            width={this.props.width}
            height={this.props.height}
          />
      </div>
    );
  }
}

export default DisplaySvg;
