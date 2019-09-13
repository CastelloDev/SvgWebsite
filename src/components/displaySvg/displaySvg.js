import React, { Component } from "react";
import base64 from "base-64";

class DisplaySvg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSize: "0 "
    };
  }

  dataURLtoKilloBytes = dataURI => {
    return base64.decode(dataURI).length / 1000;
  };

  componentWillMount = () => {
    if (this.props.dataUrl) {
      this.setState({
        fileSize:`${this.dataURLtoKilloBytes(
          this.props.dataUrl.split(",")[1]
        ).toString()}  KB`
      });
    }
  };
  render() {
    return (
      <div>
        <figure>
          <img
            id="svg-display-id"
            src={this.props.dataUrl}
            width={this.props.width}
            height={this.props.height}
            alt="svg image"
          />
          <figcaption> {`File Size : ${this.state.fileSize}`}</figcaption>
        </figure>
      </div>
    );
  }
}

DisplaySvg.propTypes = {
    dataUrl: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default DisplaySvg;
