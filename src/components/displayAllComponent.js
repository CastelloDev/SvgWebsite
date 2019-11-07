import React, { Component } from "react";
import ChooseFolder from "./chooseFolder/chooseFolder";
import { NavLink,Redirect } from "react-router-dom";
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
  constructor(props) {
    super(props);
    this.state = {
     redirect : false
    };
  }
  getOptimizeSvg = async () => {
    for (var option of this.props.svgOptions) {
      changeObj(option, this.props.svgObject.plugins);
    }
    for (var setting of this.props.svgSettingList) {
      if (this.props.svgOptions.length > 0) {
        this.props.displayOptimize.push({
          originalSvg: setting.dataurl,
          name: setting.name,
          optimisedSvg: await optimizeSvg(
            setting.dataurl,
            this.props.reduxState.svgObject.plugins
          )
        });
      } else {
        this.props.displayOptimize.push({
          originalSvg: setting.dataurl,
          name: setting.name,
          optimisedSvg: await optimizeSvg(setting.dataurl, null)
        });
      }
    }
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/FinalSvgDisplay' />
    }
  }

  render() {
    return (
        <div className="home-display-class">
        {this.renderRedirect()}
          <div className="choose">
            <ChooseFolder />
          </div>
          <div className="choose">
            <SvgSettingOptions />
            <div className="optimise-button-div">
                <button className="optimize-button" onClick={this.getOptimizeSvg}>
                  Optimize
                </button>
            </div>
          </div>
        </div>
    );
  }
}

DisplayAllComponent.propTypes = {
  reduxState: PropTypes.object,
  svgSettingList: PropTypes.object,
  svgSettingList : PropTypes.object,
  svgOptions: PropTypes.object,
  svgObject: PropTypes.object,
  displayOptimize: PropTypes.object
};

const mapStateToProps = state => {
  const svgSettingList = state.svgSettingList;
  const svgOptions = state.svgOptions;
  const svgObject = state.svgObject;
  const displayOptimize = state.displayOptimize;
  return {svgSettingList,svgOptions,svgObject,displayOptimize};
};

export default connect(
  mapStateToProps,
)(DisplayAllComponent);
