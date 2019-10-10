import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplaySvg from "./displaySvg";
import finalSvgDisplay from "./finalSvgDisplay.scss";
import { connect } from "react-redux";
import base64 from "base-64";
import InlineSVG from "svg-inline-react";
import { SVG_TAG_NAMES } from "../../constants/constants";
import {
  ADD_VARIABLE,
  UPDATE_VARIABLE,
  DELETE_VARIABLE
} from "../../store/actionTypes";
import {
  wrapPathsWithLinkElement,
  svgElement,
  linkElementHead
} from "../functions";

class FinalSvgDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrappedPathsElement: [],
      pathArrayState: null
    };
  }

  svgPathClick() {
    alert("I have been clicked");
  }

  generate_random_id = string_length => {
    let random_string = "";
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90;
    for (let i = 0; i < string_length; i++) {
      random_ascii = Math.floor(
        Math.random() * (ascii_high - ascii_low) + ascii_low
      );
      random_string += String.fromCharCode(random_ascii);
    }
    return `id_${random_string}`;
  };

  componentDidMount = () => {
    var array = [];
    var pathArrayLocal = [];

    for (var y in SVG_TAG_NAMES) {
      var pathArray = document.getElementsByTagName(SVG_TAG_NAMES[y]);
      for (var x of pathArray) {
        var element = new XMLSerializer().serializeToString(x).toString();
        if (!element.includes("id=")) {
          element = element.replace(
            "<" + SVG_TAG_NAMES[y],
            "<" +
              SVG_TAG_NAMES[y] +
              ' id="id_' +
              this.generate_random_id(7) +
              '"'
          );
        }
        var elementWrapper = document.createElement("a");
        elementWrapper.setAttribute("class", "className-1");
        elementWrapper.setAttribute("onClick", this.svgPathClick);
        elementWrapper.setAttribute("id", "id-1");
        pathArrayLocal.push(x);
        elementWrapper.appendChild(
          new DOMParser().parseFromString(element, "text/html").body.firstChild
        );
        array.push(elementWrapper);
      }
    }

    this.setState({
      wrappedPathsElement: array,
      pathArrayState: pathArrayLocal
    });
  };

  render() {
    const listOfFileNames = [];

    for (var key in this.props.reduxState.displayOptimize) {
      var stringElement = base64.decode(
        this.props.reduxState.displayOptimize[key].optimisedSvg
      );
      console.log(
        "this.state.wrappedPathsElement : ",
        this.state.wrappedPathsElement
      );
      if (this.state.wrappedPathsElement.length > 0) {
        for (
          var index = 0;
          index < this.state.wrappedPathsElement.length;
          index++
        ) {
          var tempWrapedStr = new XMLSerializer()
            .serializeToString(this.state.wrappedPathsElement[index])
            .toString();

          var tempToWrapStr = new XMLSerializer()
            .serializeToString(this.state.pathArrayState[index])
            .toString();
          tempToWrapStr = tempToWrapStr.replace(
            'xmlns="http://www.w3.org/2000/svg"',
            ""
          );
          if (
            tempToWrapStr.substring(0, 5) == "<path" ||
            tempToWrapStr.substring(0, 5) == "<rect"
          ) {
            tempToWrapStr =
              tempToWrapStr.substring(0, 5) +
              " " +
              tempToWrapStr.substring(6, tempToWrapStr.length).trim();
          } else if (tempToWrapStr.substring(0, 5) == "<elli") {
            tempToWrapStr =
              tempToWrapStr.substring(0, 8) +
              " " +
              tempToWrapStr.substring(8, tempToWrapStr.length).trim();
          } else if (tempToWrapStr.substring(0, 5) == "<rect") {
            tempToWrapStr =
              tempToWrapStr.substring(0, 5) +
              " " +
              tempToWrapStr.substring(6, tempToWrapStr.length).trim();
          } else if (tempToWrapStr.substring(0, 5) == "<circ") {
            //<circle
            //  console.log("Part 1 : ", tempToWrapStr.substring(0,7));
            //  console.log("Part 2 : ",tempToWrapStr.substring(8, tempToWrapStr.length));
            tempToWrapStr =
              tempToWrapStr.substring(0, 7) +
              " " +
              tempToWrapStr.substring(8, tempToWrapStr.length).trim();
            //console.log("stringElement : ",stringElement)
            console.log("final string : ", tempToWrapStr);
          } else if (tempToWrapStr.substring(0, 5) == "<poly") {
            //<polygon
            tempToWrapStr =
              tempToWrapStr.substring(0, 8) +
              " " +
              tempToWrapStr.substring(9, tempToWrapStr.length).trim();
          } else if (tempToWrapStr.substring(0, 5) == "<line") {
            tempToWrapStr =
              tempToWrapStr.substring(0, 8) +
              " " +
              tempToWrapStr.substring(9, tempToWrapStr.length).trim();
            //console.log("stringElement : ",stringElement)
          } else if (tempToWrapStr.substring(0, 5) == "<text") {
            tempToWrapStr =
              tempToWrapStr.substring(0, 5) +
              " " +
              tempToWrapStr.substring(6, tempToWrapStr.length).trim();
          }

          stringElement = stringElement.replace(tempToWrapStr, tempWrapedStr);
        }
      }

      listOfFileNames.push(
        <div className="display-svg-opt-notopt">
          <div className="original-svg-div" key={key}>
            <DisplaySvg
              key={key}
              svgType="originalSvg"
              dataUrl={this.props.reduxState.displayOptimize[key].originalSvg}
              width="100px"
              height="300px"
            />
          </div>
          <div className="optimised-svg-div">
            <InlineSVG src={stringElement} />
          </div>
        </div>
      );
    }

    return (
      <div>
        {listOfFileNames.length > 0 ? (
          <div>
            <div className="display-page-div">{listOfFileNames}</div>
          </div>
        ) : (
          <div>No svg to display</div>
        )}
      </div>
    );
  }
}

FinalSvgDisplay.propTypes = {
  reduxState: PropTypes.object,
  addToStore: PropTypes.func,
  updateStore: PropTypes.func,
  deleteFromStore: PropTypes.func,
  listToDisplay: PropTypes.array
};

const mapStateToProps = state => {
  const reduxState = { reduxState: { ...state } };
  return reduxState;
};

const mapDispatchToProps = dispatch => {
  return {
    addToStore: (variableName, variableValue) =>
      dispatch({
        type: ADD_VARIABLE,
        variableName: variableName,
        variableValue: variableValue
      }),
    updateStore: (variableName, variableValue) =>
      dispatch({
        type: UPDATE_VARIABLE,
        variableName: variableName,
        variableValue: variableValue
      }),
    deleteFromStore: variableName =>
      dispatch({ type: DELETE_VARIABLE, variableName: variableName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalSvgDisplay);
