import React, { Component } from "react";
import ChooseFolder from "./chooseFolder/chooseFolder";
import { Redirect } from "react-router-dom";
import SvgSettingOptions from "./svgSetting/svgSettingOptions";
import "../components/checkBoxSelection/checkBoxSelection.scss";
import { changeObj, optimizeSvg } from "../../src/components/functions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DisplayAllComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  getOptimizeSvg = async () => {
    let originalAndOptimised = {};
    for (var option of this.props.svgOptions) {
      changeObj(option, this.props.svgObject.plugins);
    }
    for (var setting of this.props.svgSettingList) {
      if (this.props.svgOptions.length > 0) {
        originalAndOptimised = {
          originalSvg: setting.dataurl,
          name: setting.name,
          optimisedSvg: await optimizeSvg(
            setting.dataurl,
            this.props.svgObject.plugins
          )
        };
      } else {
        originalAndOptimised = {
          originalSvg: setting.dataurl,
          name: setting.name,
          optimisedSvg: await optimizeSvg(
            setting.dataurl,
            this.props.svgObject.plugins
          )
        };
      }
      this.props.displayOptimize.push(originalAndOptimised);
    }
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div className="home-display">
        {this.state.redirect ? <Redirect to="/FinalSvgDisplay" /> : null}
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
  svgSettingList: PropTypes.object,
  svgOptions: PropTypes.object,
  svgObject: PropTypes.object,
  displayOptimize: PropTypes.object
};

const mapStateToProps = state => {
  const svgSettingList = state.svgSettingList;
  const svgOptions = state.svgOptions;
  const svgObject = state.svgObject;
  const displayOptimize = state.displayOptimize;
  return { svgSettingList, svgOptions, svgObject, displayOptimize };
};

export default connect(mapStateToProps)(DisplayAllComponent);
