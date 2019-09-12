import React, { Component } from "react";
import "./../checkBoxSelection/checkBoxSelection.scss";
import {cardLayout} from "../svgSetting/svgCardLayout";
import SvgSetting from "../svgSetting/svgSetting";
import Slider from "./slider";
class svgSettingArray extends Component {
	constructor(props) {
		super(props);
		this.state = {
		settingNamesList : []
    }
	}

   render() {
   	for(var key in cardLayout) {
		  if(cardLayout[key].type==="checkbox"){
					 this.state.settingNamesList.push(<SvgSetting key={key} name={cardLayout[key].text} />);
			}else if(cardLayout[key].type==="slider"){
					 this.state.settingNamesList.push(<Slider key={key} name={cardLayout[key].text} />);
			}
		}
	
	return (
			<div className="card-settings" >
	      <div >
					<label> SVG settings </label>
				</div>
				<div >
					{ this.state.settingNamesList}
				</div>
			</div>
		);
	}
}
export default svgSettingArray;
