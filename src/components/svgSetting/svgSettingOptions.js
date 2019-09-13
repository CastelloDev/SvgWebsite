import React, { Component } from "react";
import "./../checkBoxSelection/checkBoxSelection.scss";
import {cardLayout} from "./svgCardLayout";
import SvgSetting from "./svgSetting";
import Slider from "./slider";
class SvgSettingOptions extends Component {
	constructor(props) {
		super(props);
		this.state = {
		settingOptionList : []
    }
	}

   render() {
   	for(var key in cardLayout) {
		  if(cardLayout[key].type==="checkbox"){
					 this.state.settingOptionList.push(<SvgSetting key={key} option={cardLayout[key].text} />);
			}else if(cardLayout[key].type==="slider"){
					 this.state.settingOptionList.push(<div className="slider"><Slider key={key} option={cardLayout[key].text} /></div>);
			}
		}
	
	return (
			<div className="card-settings" >
	      <div >
					<label> SVG settings </label>
				</div>
				<div >
					{ this.state.settingOptionList}
				</div>
			</div>
		);
	}
}
export default SvgSettingOptions;
