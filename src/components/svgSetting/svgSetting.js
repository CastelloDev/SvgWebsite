import React, { Component } from 'react';
import '../checkBoxSelection/checkBoxSelection.scss';
import PropTypes from 'prop-types';
import {Svgo} from '../svgSetting/svgoConfig';

class SvgSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
			 isClicked: this.props.isSelected,
			 arr:[],
			 svgoObject: {...Svgo},
			 isFound:true
        };
    }

	handleDivClick= () => {
		 this.setState({isClicked: !this.state.isClicked});
	    for(var i of this.state.arr){
			
	        if(i===this.props.k){
	            console.log(i,this.props.k);
	            this.state.isFound=false;
			  break;
	        }
	    }
	    console.log(this.state.isFound);
		 if(this.state.isFound){
	        this.state.arr.push(this.props.k);	
	        this.state.isFound=false;	
		 }
		 else{
		   this.state.arr.pop(this.props.k); 
		 }
		 this.m(this.state.arr[0]);
		 				console.log(this.state.arr);
	}

	m=(value)=>{
	    let newSvgoObject = this.state.svgoObject.plugins.filter((option)=>{
	        if(option[value] !== null && option[value] !== undefined){
	            console.log(option[value]);
	            option[value] = true;
	        }
	        return true;
	    });
		
	    console.log(newSvgoObject);
	}

	render() {
	    return (
	          <div
    	
    		onClick={this.handleDivClick}
	        >
	            <input
    		
    			type='checkbox'
    			checked={this.state.isClicked}
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
	 k:PropTypes.string,
    isSelected: PropTypes.bool
};
export default SvgSetting;