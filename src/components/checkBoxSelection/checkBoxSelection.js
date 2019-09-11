import React, { Component } from 'react';
import './checkBoxSelection.scss';
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
		if (this.props.isSelected) {
			this.setState({
				isClicked: true
			});
		} else if (!this.props.isSelected) {
			this.setState({
				isClicked: false
			});
		}
	}

	render() {
    const arrayOfFiles = this.props.arrayOfItems;
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
					  {arrayOfFiles}
					</label>
				</div>
		);
	}
}

export default CheckBoxSelection;
