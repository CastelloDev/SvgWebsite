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
import { wrapElements, updateSvgElements } from "../functions";
import { Col, Row, Container } from "reactstrap";
class FinalSvgDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrappedPathsElement: [],
      pathArrayState: null,
      storePathsIds: [],
      clickedSvgState: []
    };
  }

  downloadNewSvgFiles = () => {
    var svgList = document.getElementsByTagName("svg");

    //get svg source.
    var serializer = new XMLSerializer();
    for (var svgDataIndex in svgList) {
      //get svg source.
      var source = serializer.serializeToString(svgList[svgDataIndex]);
      source = source
        .replace('<a class="className-1" id="id-1">', "")
        .replace("</a>", "")
        .replace('onclick="doSomething(this.id);"', "");

      //add name spaces.
      if (
        !source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)
      ) {
        source = source.replace(
          /^<svg/,
          '<svg xmlns="http://www.w3.org/2000/svg"'
        );
      }
      if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(
          /^<svg/,
          '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
        );
      }

      //add xml declaration
      source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

      //convert svg source to URI data scheme.
      var url =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

      //set url value to a element's href attribute.
      var linkElementToHover = document.createElement("a");
      document.body.appendChild(linkElementToHover); // This line makes it work in Firefox.
      linkElementToHover.setAttribute("href", url);
      linkElementToHover.setAttribute("download", "test.svg");
      linkElementToHover.click();

      if (svgList.length - 1 == svgDataIndex) {
        //The loop counts twice the length leading to out of bound error
        break;
      }
    }
  };

  componentWillMount = () => {
    var array = [];
    var pathArrayLocal = [];
    var elementIds = [];
    console.log(" before array len : ", array.length);
     let newArray = wrapElements(SVG_TAG_NAMES, array, pathArrayLocal, 7, elementIds);

    console.log("after array len : ",newArray.length);
    var functionStr =
      'function doSomething(elemId,white){  var arrayOfClickedIds = [];if(!arrayOfClickedIds.includes(elemId) || arrayOfClickedIds.length == 0 ){  arrayOfClickedIds.push(elemId);document.getElementById(elemId).style.fill = "brown";}else{arrayOfClickedIds.push(elemId);document.getElementById(elemId).removeAttribute("style");document.getElementById(elemId).style.fill = prevColour;}}';

    const scriptTag = document.createElement("script");
    var codeString = document.createTextNode(functionStr);
    scriptTag.setAttribute("class", "fucntionality-script");
    scriptTag.appendChild(codeString);
    document.body.appendChild(scriptTag);

    this.setState({
      wrappedPathsElement: array,
      pathArrayState: pathArrayLocal,
      storePathsIds: elementIds
    });
  };

  render() {
    const listOfFileNames = [];
    updateSvgElements(
      listOfFileNames,
      this.props.reduxState.displayOptimize,
      this.state.wrappedPathsElement,
      this.state.pathArrayState
    );
      console.log("listOfFileNames len ", listOfFileNames.length);
    return (
      <div>
        {listOfFileNames.length > 0 ? (
          <div>
            <div className="display-original-optimised">{listOfFileNames}</div>
            <div className="button-background">
            <button
              className="download-Button"
              onClick={this.downloadNewSvgFiles}
            >
              {" "}
              Download edited svg
            </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="loader-text" align="center">Loading svg images .......</h2>
          <div className="loader" ></div>
          
          </div>
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
