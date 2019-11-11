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
      svgoObject: { ...Svgo }
        };
  }

  handleSettingsClick = () => {
    let indexOf = -1;
    this.setState({
      isClicked: !this.state.isClicked
    });

 
      indexOf = this.props.svgOptions.findIndex(this.props.value);

    if (this.state.IndexOf < 0) {
      this.props.svgOptions.push(this.props.value);
    } else {
      this.props.svgOptions.splice(this.state.IndexOf, 1);
        indexOf = -1;
    }
  };

  render() {
    return (
      <div onClick={this.handleSettingsClick}>
        <input type="checkbox" checked={this.state.isClicked} />
        <label className="checkbox-label-svg">{this.props.option}</label>
      </div>
    );
  }
}

SvgSetting.propTypes = {
  svgOptions: PropTypes.object,
  svgObject: PropTypes.object,
  option: PropTypes.string,
  isSelected: PropTypes.bool
};

const mapStateToProps = state => {
  const svgOptions = state.svgOptions;
  const svgObject = state.svgObject;
  return { svgOptions, svgObject };
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
