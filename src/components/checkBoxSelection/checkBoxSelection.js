import React, { Component } from "react";
import "./checkBoxSelection.scss";
class CheckBoxSelection extends Component {
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
					className={this.state.isClicked ? 'checkbox-container-clicked' : 'checkbox-container-unclicked'}
					onClick={this.handleDivClick}
				>
					<input
						className="checkbox-input"
						type="checkbox"
						checked={this.state.isClicked}
					/>
					<label className="checkbox-label">
					  {this.props.filename}
					</label>
				</div>
		);
	}
}
export default CheckBoxSelection;
