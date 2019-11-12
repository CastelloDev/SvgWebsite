import React, { Component } from "react";
import PropTypes from "prop-types";
import finalSvgDisplay from "./finalSvgDisplay.scss";
import { connect } from "react-redux";
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
    
    let svgElementList = document.getElementsByTagName("svg");

    //get svg source.
    let serializer = new XMLSerializer();
    for(let svgDataIndex in svgElementList){   
    //get svg source.
    let source = serializer.serializeToString(svgElementList[svgDataIndex]);
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
    let url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    //set url value to a element's href attribute.
        let dl = document.createElement("a");
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
    let array = [];
    let pathArrayLocal = [];
    let elementIds = [];
    wrapElements(SVG_TAG_NAMES, array, pathArrayLocal, 7, elementIds);
    let functionStr =
      'function changeSvgColourById(elemId,white){  let arrayOfClickedIds = [];if(!arrayOfClickedIds.includes(elemId) || arrayOfClickedIds.length == 0 ){  arrayOfClickedIds.push(elemId);document.getElementById(elemId).style.fill = "brown";}else{arrayOfClickedIds.push(elemId);document.getElementById(elemId).removeAttribute("style");document.getElementById(elemId).style.fill = prevColour;}}';

    const script = document.createElement("script");
    let textNodeToChangeAvgColour = document.createTextNode(functionStr);
    script.setAttribute("class", "fucntionality-script");
    script.appendChild(textNodeToChangeAvgColour);
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
      this.props.displayOptimize,
      this.state.wrappedPathsElement,
      this.state.pathArrayState
    );
    return (
      <div>
        {listOfFileNames.length > 0? (
          <div>
            <div className="display-original-optimised">{listOfFileNames}</div>
            <div align="center">
            <button
              className="download-button"
              onClick={this.downloadNewSvgFiles}
            >
              Download edited svg
            </button>
            </div>
          </div>
        ) : (
          <div className="position-loader" align="center">
                <div className="loader-text">loading svg .....</div>
                <div className="loader"></div>
          </div>
        )}
      </div>
    );
  }
}

FinalSvgDisplay.propTypes = {
  displayOptimize : PropTypes.object, 
};

const mapStateToProps = state => {
  const displayOptimize = state.displayOptimize;
  return {displayOptimize};
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