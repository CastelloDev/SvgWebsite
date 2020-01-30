import React, { Component } from "react";
import ChooseFolder from "./chooseFolder/chooseFolder";
import { Redirect } from "react-router-dom";
import SvgSettingOptions from "./svgSetting/svgSettingOptions";
import "../components/checkBoxSelection/checkBoxSelection.scss";
import { changeObj, optimizeSvg } from "../../src/components/functions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { UPDATE_VARIABLE} from "../../src/store/actionTypes";

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
      let { displayOptimize=[] } = this.props;
      let SvgPlugins = this.props.svgOptions.length > 0 ?  this.props.svgObject.plugins : null;
        originalAndOptimised = {
          originalSvg: setting.dataurl,
          name: setting.name,
          optimisedSvg: await optimizeSvg(
            setting.dataurl,
            SvgPlugins
          )
        };
        this.props.updateStore("displayOptimize",[...displayOptimize,originalAndOptimised]);
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
            <button className="optimize-button" onClick={()=>this.getOptimizeSvg()}>
              Optimize
            </button>
          </div>
        </div>
      </div>
    );
  }
}

DisplayAllComponent.propTypes = {
  addToStore: PropTypes.func,
  updateStore: PropTypes.func,
  svgSettingList: PropTypes.array,
  svgOptions: PropTypes.array,
  svgObject: PropTypes.object,
  displayOptimize: PropTypes.array
};

const mapStateToProps = state => {
  const svgSettingList = state.svgSettingList;
  const svgOptions = state.svgOptions;
  const svgObject = state.svgObject;
  const displayOptimize = state.displayOptimize;
  return { svgSettingList, svgOptions, svgObject, displayOptimize };
};

const mapDispatchToProps = dispatch => {
  return {
      updateStore: (variableName, variableValue) => dispatch({ type: UPDATE_VARIABLE, variableName: variableName, variableValue: variableValue })
      };
};

export default connect(mapStateToProps,mapDispatchToProps)(DisplayAllComponent);
