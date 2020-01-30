import React, { Component } from "react";
import "./../checkBoxSelection/checkBoxSelection.scss";
import { CardLayout } from "./svgCardLayout";
import SvgSetting from "./svgSetting";
import Slider from "./slider";
class SvgSettingOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingOptionList: []
    };
  }

  render() {
   
    return (
      <div className="card-settings">
        <div>
          <label>{"SVG settings"}</label>
        </div>
        {CardLayout.map(function(option,key){
          if(option.type === "checkbox"){
            return (<SvgSetting
            key={key}
            value={option.value}
            option={option.text}
          />)
          } else if (option.type === "slider"){
            return (<div className="slider">
            <Slider key={key} option={option.text} />
          </div>)
          }
        })}
      </div>
    );
  }
}
export default SvgSettingOptions;
