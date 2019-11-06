import React, { Component } from "react";
import ChooseFolder from "./chooseFolder/chooseFolder";
import { NavLink } from "react-router-dom";
import SvgSettingOptions from "./svgSetting/svgSettingOptions";
import "../components/checkBoxSelection/checkBoxSelection.scss";
import {
  changeObj,
  optimizeSvg,
  optimizeSvgList
} from "../../src/components/functions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ADD_VARIABLE,
  UPDATE_VARIABLE,
  DELETE_VARIABLE
} from "../store/actionTypes";
import finalSvgDisplay from "../components/displaySvg/finalSvgDisplay";
import { conditionalExpression } from "@babel/types";
class DisplayAllComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optimisedSvg: [],
      optimisedOriginalSvgList:[]
    };
  }

  getOptimizeSvg = async () => {
    try {
      for (var option of this.props.reduxState.svgOptions) {
        changeObj(option, this.props.reduxState.svgObject.plugins);
      }
      var results = await  optimizeSvgList(
        this.props.reduxState.svgSettingList,
        this.props.reduxState.svgOptions,
        this.props.reduxState.svgObject.plugins
      ).then(res => {
          // this.state.optimisedOriginalSvgList.push(res);
          // this.setState({
          //   optimisedOriginalSvgList : res
          // })
          console.log("new res   ", Arrays.toString(res));
        return res;
      }).catch(error =>{
         return error ;
      });

     
      console.log("res  : ", results[0]);
      console.log("name[0]  : ", results[0].name);
      console.log("name[0][]  : ", results[0][0].name);
      console.log("res  : ", this.state.optimisedOriginalSvgList);
      console.log("results  : ",results);
      var obj = this.state.optimisedOriginalSvgList
      Object.keys(obj).forEach((key)=>{
              console.log(key, obj[key])
      })
      for(var key = 0 ; key < this.state.optimisedOriginalSvgList.length ; key++){
        console.log("setting",this.state.optimisedOriginalSvgList[key])
        if (this.props.reduxState.svgOptions.length > 0) {
        this.props.reduxState.displayOptimize.push({
          originalSvg: this.state.optimisedOriginalSvgList[key].dataurl,
          name: this.state.optimisedOriginalSvgList[key].name,
          optimisedSvg: this.state.optimisedOriginalSvgList[key].OptimsedDataUrl
        });
      }
     else {
          console.log("this.state.optimisedOriginalSvgList ", this.state.optimisedOriginalSvgList);
          console.log("this.state.[optimisedOriginalSvgList[0] ", this.state.optimisedOriginalSvgList[0]);
          console.log("this.state.[optimisedOriginalSvgList[2] ", this.state.optimisedOriginalSvgList[1]);
          console.log("this.state  type ", Array.isArray(this.state.optimisedOriginalSvgList[0]));
          var arr = this.state.optimisedOriginalSvgList[0]
          console.log("arr ",arr[0]);
          // console.log("Obj :", (this.state.optimisedOriginalSvgList[0]),"\n"+  key); 

         // this.state.optimisedOriginalSvgList.forEach(item => {item.forEach((k, v) => { console.log(k + ": " + v)});
        //  this.state.optimisedOriginalSvgList.map((item, key) =>
        //   item.map((lst, key) =>
            
        //  ));
          // this.state.optimisedOriginalSvgList.forEach(element => {
          //   console.log(element,"mpilo");
          //   console.log(this.state.optimisedOriginalSvgList.map.entr,"Other");
          //   console.log(element.map.entrySet(),"Zzzz");
          // });
          
          this.props.reduxState.displayOptimize.push({
            originalSvg: this.state.optimisedOriginalSvgList[key].dataurl,
            name: this.state.optimisedOriginalSvgList[key].name,
            optimisedSvg:this.state.optimisedOriginalSvgList[key].dataurl
          });
                }
    };
    } catch (error) {
      console.log(" error ",error.message);
    }
    console.log("exit ", this.props.reduxState.displayOptimize);
}

  render() {
    return (
      <div>
        <div className="main-class">
          <div className="choose">
            <ChooseFolder />
          </div>
          <div>
            <SvgSettingOptions />
            <div className="optimise-button-div">
              <NavLink to="/FinalSvgDisplay">
                <button
                  className="optimize-Button"
                  onClick={this.getOptimizeSvg}
                >
                  Optimize
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="display-svg-edit-download"></div>
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
