import React, { Component } from "react";
import ChooseFolder from "./chooseFolder/chooseFolder";
import { NavLink } from "react-router-dom";
import SvgSettingOptions from "./svgSetting/svgSettingOptions";
import "../components/checkBoxSelection/checkBoxSelection.scss";
import { changeObj, optimizeSvg } from "../../src/components/functions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ADD_VARIABLE,
  UPDATE_VARIABLE,
  DELETE_VARIABLE
} from "../store/actionTypes";

class DisplayAllComponent extends Component {
  getOptimizeSvg = async () => {
    for (var option of this.props.reduxState.svgOptions) {
      changeObj(option, this.props.reduxState.svgObject.plugins);
    }
    for (var setting of this.props.reduxState.svgSettingList) {
      if (this.props.reduxState.svgOptions.length > 0) {
        this.props.reduxState.displayOptimize.push({
          originalSvg: setting.dataurl,
          name: setting.name,
          optimisedSvg: await optimizeSvg(
            setting.dataurl,
            this.props.reduxState.svgObject.plugins
          )
        });
      } else {
        this.props.reduxState.displayOptimize.push({
          originalSvg: setting.dataurl,
          name: setting.name,
          optimisedSvg: await optimizeSvg(setting.dataurl, null)
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="main-class">
          <div className="choose">
            <ChooseFolder />
          </div>
          <div className="choose">
            <SvgSettingOptions />
            <div className="optimise-button-div">
              <NavLink to="/FinalSvgDisplay">
                <button className="optimize-Button" onClick={this.getOptimizeSvg}>
                  Optimize
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DisplayAllComponent.propTypes = {
  reduxState: PropTypes.object,
  addToStore: PropTypes.func,
  updateStore: PropTypes.func,
  deleteFromStore: PropTypes.func
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
)(DisplayAllComponent);
