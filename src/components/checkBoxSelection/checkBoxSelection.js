import React, { Component } from "react";
import PropTypes from "prop-types";
import "./checkBoxSelection.scss";
import { connect } from "react-redux";
import {
  ADD_VARIABLE,
  UPDATE_VARIABLE,
  DELETE_VARIABLE
} from "../../store/actionTypes";

class CheckBoxSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: this.props.isSelected
    };
  }

  convertSvgToDataUrl = file => {
    let reader = new FileReader();
    reader.onload = result => {
      this.props.svgSettingList.push({
        name: file.name,
        dataurl: result.target.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  changeColourAndTick = () => {
    let isFound = false;
    let index = 0;
    this.setState({ isClicked: !this.state.isClicked });
    for (var key in this.props.svgSettingList) {
      if (
        this.props.svgSettingList[key].name === this.props.file.name
      ) {
        isFound = true;
        index = key;
      }
    }
    if (!isFound) {
      this.convertSvgToDataUrl(this.props.file);
    } else {
      this.props.svgSettingList.splice(index, 1);
      isFound = false;
    }
  };

  render() {
    return (
      <div
        className={
          this.state.isClicked
            ? "checkbox-container-clicked"
            : "checkbox-container-unclicked"
        }
        onClick={this.changeColourAndTick}
      >
        <input
          className="checkbox-input"
          type="checkbox"
          checked={this.state.isClicked}
        />
        <label className="checkbox-label">{this.props.filename}</label>
      </div>
    );
  }
}

CheckBoxSelection.propTypes = {
  svgSettingList: PropTypes.object,
  svgOptions: PropTypes.object,
  svgObject: PropTypes.object,
  displayOptimize: PropTypes.object,
  filename: PropTypes.string
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
)(CheckBoxSelection);
