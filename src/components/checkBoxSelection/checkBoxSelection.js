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
    const svgSettings = this.props.svgSettingList ?this.props.svgSettingList : [];
    reader.onload = result => {
  
      svgSettings.push({
        name: file.name,
        dataurl: result.target.result
      });
      this.props.updateStore("svgSettingList",svgSettings);

    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  changeColourAndTick = () => {
    
    this.setState({ isClicked: !this.state.isClicked });
    let index = this.props.svgSettingList.findIndex(
      setting => setting.name == this.props.file.name
    );

    if (index < 0) {
      this.convertSvgToDataUrl(this.props.file);
    } else {
      this.props.svgSettingList.splice(index, 1);
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
        onClick={()=>this.changeColourAndTick()}
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
  filename: PropTypes.string
};

const mapStateToProps = state => {
  const svgSettingList = state.svgSettingList;
  return { svgSettingList };
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
