import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkBoxSelection.scss';
import { connect } from 'react-redux';
import { ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE } from '../../store/actionTypes';

class CheckBoxSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
			isClicked: false,
			isFound:false,
			index:null,
		};
		this.b={
			name:'',
			dataurl:''
		}
    }

    componentWillMount() {
	 this.setState({ isClicked: this.props.isSelected }); 
	}
	
	convertSvgToDataUrl=(file)=>{
		let reader  = new FileReader();
		reader.onload = (result)=>{
			this.b.name=file.name;
			this.b.dataurl=result.target.result;
			this.props.reduxState.svgSettingList.push (this.b);
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	}

	handleDivClick= () => {
	    this.setState({
	        isClicked: !this.state.isClicked
		});
		for(var file in this.props.reduxState.svgSettingList){
			console.log(this.props.reduxState.svgSettingList[file]);
			if(this.props.reduxState.svgSettingList[file].name===this.props.file.name){
				this.state.isFound=true;
				this.state.index=file;
			}
		}
		if(this.state.isFound===false){
			this.convertSvgToDataUrl(this.props.file);	
		}else{
			this.props.reduxState.svgSettingList.splice(this.state.index, 1);
			this.state.isFound=false;
		}
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
					  {this.props.filename}
						
	            </label>
	        </div>
	    );
	}
}

CheckBoxSelection.propTypes={
    reduxState: PropTypes.object,
    addToStore: PropTypes.func,
    updateStore: PropTypes.func,
	deleteFromStore: PropTypes.func,
	filename:PropTypes.string
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxSelection);
