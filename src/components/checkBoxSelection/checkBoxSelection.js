import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkBoxSelection.scss';
class CheckBoxSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    componentWillMount() {
	 this.setState({ isClicked: this.props.isSelected }); 
    }

	handleDivClick= () => {
	    this.setState({
	        isClicked: !this.state.isClicked
	    });
	}

	render() {
	    return (
	        <div
    		className={this.state.isClicked ? 'checkbox-container-clicked' : 'checkbox-container-unclicked'}
    		onClick={this.handleDivClick}
	        >
	            <input
    			className='checkbox-input'
    			type='checkbox'
    			checked={this.state.isClicked}
	            />
	            <label className='checkbox-label'>
	                {this.props.filenames}
	            </label>
	        </div>
	    );
	}
}

CheckBoxSelection.propTypes = {
    filenames: PropTypes.string,
    isSelected: PropTypes.bool
};

export default CheckBoxSelection;
