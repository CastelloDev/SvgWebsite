import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplaySvg from "./displaySvg";
import finalSvgDisplay from "./finalSvgDisplay.scss";
import { connect } from "react-redux";
import base64 from "base-64";
import InlineSVG from "svg-inline-react";
import {
  ADD_VARIABLE,
  UPDATE_VARIABLE,
  DELETE_VARIABLE
} from "../../store/actionTypes";
import {wrapPathsWithLinkElement, svgElement , linkElementHead} from '../functions';

class FinalSvgDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        wrappedPathsElement : [],
        pathArrayState : null
    };
}



  componentDidMount = () => {
    var array = [] ;
    var pathArrayLocal = [];
    var pathArray = document.getElementsByTagName("path");
    console.log("pathArray : ", pathArray);
    console.log("pathArray : ", pathArray.length);

    for (var i = 0; i < pathArray.length; i++) {
      var elementWrapper = document.createElement("a");
      elementWrapper.setAttribute("class","className-1");
      elementWrapper.setAttribute("id","id-1");
      console.log("pathArray["+ i +"]",pathArray[i]);
      pathArrayLocal.push(pathArray[i]);
      elementWrapper.appendChild(pathArray[i]);
      array.push(elementWrapper);

    }

    this.setState({
      wrappedPathsElement : array,
      pathArrayState : pathArrayLocal
    });
  };

  render() {
    const listOfFileNames = [];

    for (var key in this.props.reduxState.displayOptimize) {
      var stringElement = base64.decode(
        this.props.reduxState.displayOptimize[key].optimisedSvg
      );
      var doc = new DOMParser().parseFromString(stringElement, "text/html").body.firstChild;
      if(this.state.wrappedPathsElement.length > 0){
        for(var index=0; index < this.state.wrappedPathsElement.length ; index++){
            var tempStr = new XMLSerializer().serializeToString(this.state.wrappedPathsElement[index]).toString();
            stringElement = stringElement.replace();
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
