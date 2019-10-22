import React, { Component } from "react";
import base64 from "base-64";
import "./finalSvgDisplay.scss";
import PropTypes from "prop-types";
import InlineSVG from "svg-inline-react";
import { Col, Row, Container } from "reactstrap";
class DisplaySvg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSizeNormal: 0,
      fileSizeOptimised: 0,
      isClicked: false
    };
  }

  changeColourOnclickToMark = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  componentWillMount = () => {
    if (this.props.dataUrl) {
      this.setState({
        fileSizeNormal: this.dataURLtoKilloBytes(
          this.props.dataUrl.split(",")[1]
        ),
        fileSizeOptimised: this.props.stringElement.length / 1000
      });
    }
  };

  dataURLtoKilloBytes = dataURI => {
    return base64.decode(dataURI).length / 1000;
  };

  render() {
    return (
      <div>
        <div className="display-svgs-border-match">
          <Container>
            <Row>
              <Col xs="6">
                <figure>
                  <img
                    className={this.props.svgType}
                    src={this.props.dataUrl}
                    width={this.props.width}
                    height={this.props.height}
                    alt="svg to be displayed"
                  />
                  <figcaption>
                    {"File Size : " + this.state.fileSizeNormal + " KB"}
                  </figcaption>
                </figure>
              </Col>
              <Col xs="6">
                <InlineSVG src={this.props.stringElement} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                  {"File Size : " + this.state.fileSizeOptimised + " KB"}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
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
