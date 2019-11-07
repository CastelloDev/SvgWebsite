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
    
    var svgElementList = document.getElementsByTagName("svg");

    //get svg source.
    var serializer = new XMLSerializer();
    for(var svgDataIndex in svgElementList){   
    //get svg source.
    var source = serializer.serializeToString(svgElementList[svgDataIndex]);
    source = source.replace("<a class=\"svg-elem-wrapper\" id=\"id-1\">","").replace("</a>","").replace("onclick=\"changeSvgColourById(this.id);\"","");

    //add name spaces.
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
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
    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    //set url value to a element's href attribute.
        var dl = document.createElement("a");
        document.body.appendChild(dl); // This line makes it work in Firefox.
        dl.setAttribute("href", url);
        dl.setAttribute("download", "test.svg");
        dl.click();

      if(svgElementList.length-1 == svgDataIndex){
        break;
      }
    }

  };

  componentDidMount = () => {
    var array = [];
    var pathArrayLocal = [];
    var elementIds = [];
    wrapElements(SVG_TAG_NAMES, array, pathArrayLocal, 7, elementIds);
    var functionStr =
      'function changeSvgColourById(elemId,white){  var arrayOfClickedIds = [];if(!arrayOfClickedIds.includes(elemId) || arrayOfClickedIds.length == 0 ){  arrayOfClickedIds.push(elemId);document.getElementById(elemId).style.fill = "brown";}else{arrayOfClickedIds.push(elemId);document.getElementById(elemId).removeAttribute("style");document.getElementById(elemId).style.fill = prevColour;}}';

    const script = document.createElement("script");
    var t = document.createTextNode(functionStr);
    script.setAttribute("class", "fucntionality-script");
    script.appendChild(t);
    document.body.appendChild(script);

    this.setState({
      wrappedPathsElement: array,
      pathArrayState: pathArrayLocal,
      storePathsIds: elementIds
    });
  }

  render() {
    const listOfFileNames = [];
    updateSvgElements(
      listOfFileNames,
      this.props.reduxState.displayOptimize,
      this.state.wrappedPathsElement,
      this.state.pathArrayState
    );
    return (
      <div>
        {listOfFileNames.length > 0? (
          <div>
            <div className="display-original-optimised">{listOfFileNames}</div>
            <button
              className="download-Button"
              onClick={this.downloadNewSvgFiles}
            >
              {" "}
              Download edited svg
            </button>
          </div>
        ) : (
          <div>
                <div className="loader-text" align="center">loading svg .....</div>
                <div className="loader"></div>
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