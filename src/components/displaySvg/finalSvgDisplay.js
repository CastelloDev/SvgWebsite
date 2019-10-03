import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplaySvg from "./displaySvg";
import finalSvgDisplay from "./finalSvgDisplay.scss";
import { connect } from "react-redux";
import {
  ADD_VARIABLE,
  UPDATE_VARIABLE,
  DELETE_VARIABLE
} from "../../store/actionTypes";
class FinalSvgDisplay extends Component {
  
  render() {
    const listOfFileNames = [];

    for (var key in this.props.reduxState.displayOptimize) {
      listOfFileNames.push(
        <div className="display-svg-opt-notopt">
          <div className="original-svg-div">
          <DisplaySvg
            svgType= "originalSvg"
            dataUrl={this.props.reduxState.displayOptimize[key].originalSvg}
            width="100px"
            height="300px"
          />
          </div>
          <div className="optimised-svg-div">
          <DisplaySvg
            svgType="optimisedSvg"
            dataUrl={
              "data:image/svg+xml;base64," +
              this.props.reduxState.displayOptimize[key].optimisedSvg
            }
            width="100px"
            height="300px"
          />
          </div>
        </div>
      );
    }

    
    return (
      <div >
        {listOfFileNames.length > 0  ?
        <div className="display-page-div">
         
             {listOfFileNames}        
        </div> : 
        <div>
            No svg to display
        </div>}
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
