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
    for (var key in CardLayout) {
      if (CardLayout[key].type === "checkbox") {
        this.state.settingOptionList.push(
          <SvgSetting
            key={key}
            value={CardLayout[key].value}
            option={CardLayout[key].text}
          />
        );
      } else if (CardLayout[key].type === "slider") {
        this.state.settingOptionList.push(
          <div className="slider">
            <Slider key={key} option={CardLayout[key].text} />
          </div>
        );
      }
    }

    return (
      <div className="card-settings">
        <div>
          <label> {"SVG settings"} </label>
        </div>
        <div>{this.state.settingOptionList}</div>
      </div>
    );
  }
}
export default SvgSettingOptions;
