import React, { Component } from "react";
import "../checkBoxSelection/checkBoxSelection.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Svgo } from "../svgSetting/svgoConfig";
import {
  ADD_VARIABLE,
  UPDATE_VARIABLE,
  DELETE_VARIABLE
} from "../../store/actionTypes";

class SvgSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: this.props.isSelected,
      arr: [],
      svgoObject: { ...Svgo },
      isFound: false
    };
  }

  handleDivClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
    for (var file in this.props.svgOptions) {
      if (this.props.svgOptions[file] === this.props.value) {
        this.state.isFound = true;
        this.state.index = file;
      }
    }
    if (!this.state.isFound) {
      this.props.svgOptions.push(this.props.value);
    } else {
      this.props.svgOptions.splice(this.state.index, 1);
      this.state.isFound = false;
    }
  };

  toChangePluginObjectValues = arrayWithPluginOptions => {
    let newSvgoObject = this.props.svgObject.plugins.filter(
      option => {
        for (var element of arrayWithPluginOptions) {
          if (option[element] !== null && option[element] !== undefined) {
            option[element] = true;
          }
          return true;
        }
      }
    );

    return newSvgoObject;
  };

  changingPluginValuesPerUserOption= () => {
    this.changePluginObjectValues(this.props.svgOptions);
  };

  render() {
    return (
      <div onClick={this.handleDivClick}>
        <input type="checkbox" checked={this.state.isClicked} />
        <label className="checkbox-label-svg">{this.props.option}</label>
      </div>
    );
  }
}

SvgSetting.propTypes = {
  svgSettingList: PropTypes.object,
  svgSettingList : PropTypes.object,
  svgOptions: PropTypes.object,
  svgObject: PropTypes.object,
  displayOptimize: PropTypes.object,
  option: PropTypes.string,
  isSelected: PropTypes.bool
};

const mapStateToProps = state => {
  const svgSettingList = state.svgSettingList;
  const svgOptions = state.svgOptions;
  const svgObject = state.svgObject;
  const displayOptimize = state.displayOptimize;
  return {svgSettingList,svgOptions,svgObject,displayOptimize};
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
)(SvgSetting);
