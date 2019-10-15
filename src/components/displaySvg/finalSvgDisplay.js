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

  handleClick = () => {
    console.log("my function");
  };

  componentDidMount = () => {
    var array = [];
    var pathArrayLocal = [];
    var elementIds = [];
    wrapElements(SVG_TAG_NAMES, array, pathArrayLocal, 7, elementIds);
    var functionStr = "function doSomething(elemId,white){  var arrayOfClickedIds = [];if(arrayOfClickedIds.includes(elemId) ){alert(\"About to pop : \" + elemId);document.getElementById(elemId).style.fill = prevColour;}else{  alert(\"About to push : \" + elemId);document.getElementById(elemId).style.fill = \"brown\";;}}"

    const script = document.createElement('script');
    var t = document.createTextNode(functionStr);
    script.appendChild(t);
    document.body.appendChild(script);

    this.setState({
      wrappedPathsElement: array,
      pathArrayState: pathArrayLocal,
      storePathsIds: elementIds
    });
  };

  handleNvEnter = (event) => {
    console.log("Nv Enter:", event);
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
