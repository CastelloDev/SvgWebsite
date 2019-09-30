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
    for (var file in this.props.reduxState.svgOptions) {
      if (this.props.reduxState.svgOptions[file] === this.props.value) {
        this.state.isFound = true;
        this.state.index = file;
      }
    }
    if (this.state.isFound === false) {
      this.props.reduxState.svgOptions.push(this.props.value);
    } else {
      this.props.reduxState.svgOptions.splice(this.state.index, 1);
      this.state.isFound = false;
    }
  };

  toChangePluginObjectValues = value => {
    let newSvgoObject = this.props.reduxState.svgObject.plugins.filter(
      option => {
        for (var p of value) {
          if (option[p] !== null && option[p] !== undefined) {
            option[p] = true;
          }
          return true;
        }
      }
    );

    return newSvgoObject;
  };

  changingPluginValuesPerUserOption= () => {
    this.changePluginObjectValues(this.props.reduxState.svgOptions);
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
  reduxState: PropTypes.object,
  addToStore: PropTypes.func,
  updateStore: PropTypes.func,
  deleteFromStore: PropTypes.func,
  option: PropTypes.string,
  k: PropTypes.string,
  isSelected: PropTypes.bool
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
)(SvgSetting);
