import React, { Component } from "react";


class DisplaySvg extends Component {
  render() {
    return (
      <div className="App">
        <div className="Buttons-div">
          <div id="display-svg">
            <div className="svg-item">
              <div>
              <img
                src={this.props.dataUrl}
                width={this.props.width}
                height={this.props.height}
              />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplaySvg;
