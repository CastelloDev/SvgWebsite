import React, { Component } from "react";
import "../checkBoxSelection/checkBoxSelection.scss";
class SvgSetting extends Component {
	constructor(props) {
		super(props);
      this.state = {
			isClicked: false
		};
	}

	handleDivClick= () => {
		this.setState({
			isClicked: !this.state.isClicked
		});
	}

	componentWillMount() {
	 this.setState({ isClicked: this.props.isSelected }) 
	}

	render() {
		return (
				<div
					onClick={this.handleDivClick}
				>
					<input
						className="checkbox-input-svg"
						type="checkbox"
						checked={this.state.isClicked}
					/>
					<label className="checkbox-label-svg">
                {this.props.option}
					</label>
				</div>
		);
	}
}
export default SvgSetting;