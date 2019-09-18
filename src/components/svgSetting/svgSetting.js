import React, { Component } from 'react';
import '../checkBoxSelection/checkBoxSelection.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE } from '../../store/actionTypes';

class SvgSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
			 isClicked: this.props.isSelected
        };
    }

	handleDivClick= () => {
		 let isFound=false;
		 let index=0;
		 this.setState({isClicked: !this.state.isClicked});
		 for(var key in this.props.reduxState.svgOptions){
			 if(this.props.reduxState.svgOptions[key]===this.props.k){
				 isFound=true;
				 index=key;
			 }
		 }

		 if(!isFound){
			 this.props.reduxState.svgOptions.push(this.props.k);
		 }else{
			 this.props.reduxState.svgOptions.splice(index, 1);
			 isFound=false;
		 }
		
	}


	render() {
	    return (
	          <div
    	
    		onClick={this.handleDivClick}
	        >
	            <input type='checkbox' checked={this.state.isClicked} />
	            <label className='checkbox-label-svg'>
	                {this.props.option}
	            </label>
	        </div>
			
	    );
	}
}



SvgSetting.propTypes={
    reduxState: PropTypes.object,
    addToStore: PropTypes.func,
    updateStore: PropTypes.func,
	deleteFromStore: PropTypes.func,
	option: PropTypes.string,
	k:PropTypes.string,
   isSelected: PropTypes.bool
   
};

const mapStateToProps = state => {
    const reduxState = {reduxState:{...state}};
    return reduxState;
};

const mapDispatchToProps = dispatch => {
    return {
        addToStore: (variableName, variableValue) => dispatch({ type: ADD_VARIABLE, variableName: variableName, variableValue: variableValue }),
        updateStore: (variableName, variableValue) => dispatch({ type: UPDATE_VARIABLE, variableName: variableName, variableValue: variableValue }),
        deleteFromStore: (variableName) => dispatch({ type: DELETE_VARIABLE, variableName: variableName })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SvgSetting);
