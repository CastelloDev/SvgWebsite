import React, { Component } from 'react';
import '../checkBoxSelection/checkBoxSelection.scss';
import PropTypes from 'prop-types';
class SvgSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: this.props.isSelected
        };
    }

	handleDivClick= () => {
	    this.setState({
	        isClicked: !this.state.isClicked
	    });
	}

	render() {
	    return (
	        <div OnClick ={this.handleDivClick}>
	            <input className='checkbox-input-svg' type='checkbox' checked={this.state.isClicked}
	            />
	            <label className='checkbox-label-svg'>
	                {this.props.option}
	            </label>
	        </div>
	    );
	}
}
SvgSetting.propTypes = {
    option: PropTypes.string,
    isSelected: PropTypes.bool
};
export default SvgSetting;