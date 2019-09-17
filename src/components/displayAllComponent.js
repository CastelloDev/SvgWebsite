import React, { Component } from 'react';
import ChooseFolder from './chooseFolder/chooseFolder';
import { NavLink} from 'react-router-dom';
import DisplaySvg from './displaySvg/displaySvg';
import SvgSettingOptions from './svgSetting/svgSettingOptions';
import '../components/checkBoxSelection/checkBoxSelection.scss';
import { changeObj, optimizeSvg } from '../../src/components/functions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE } from '../store/actionTypes';
import { async } from 'q';
import base64 from 'base-64';


class DisplayAllComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           original: '',
            fake: '',
            name: ''
        };
        
    }

    mmm = async () => {
        for (var h of this.props.reduxState.svgOptions) {
            changeObj(h, this.props.reduxState.svgObject.plugins);
        }
        for (var k of this.props.reduxState.svgSettingList) {
            this.props.reduxState.displayOptimaze.push({'original':k.dataurl,'name':k.name,'fake':await optimizeSvg(k.dataurl, this.props.reduxState.svgObject.plugins)});

        }
    }

    render() {
        // const listOfFileNames = [];        console.log("listOfFileNames : ",this.state.listOfFileNames);
        return (
            <div>
            <div className='main-class'>
                <div className='choose'>
                    <ChooseFolder />
                </div>

                

                <div className='choose'>
                    <SvgSettingOptions />
                    <div className='mpilomshengu'>
            <NavLink to='/FinalSvgDisplay' >
                <div className='optimizeButton' onClick={this.mmm}>optimize</div>
                </NavLink>
            </div>
            
                </div>

                
            </div>
           
            </div>
        );
    }
}



DisplayAllComponent.propTypes = {
    reduxState: PropTypes.object,
    addToStore: PropTypes.func,
    updateStore: PropTypes.func,
    deleteFromStore: PropTypes.func
};

const mapStateToProps = state => {
    const reduxState = { reduxState: { ...state } };
    return reduxState;
};

const mapDispatchToProps = dispatch => {
    return {
        addToStore: (variableName, variableValue) => dispatch({ type: ADD_VARIABLE, variableName: variableName, variableValue: variableValue }),
        updateStore: (variableName, variableValue) => dispatch({ type: UPDATE_VARIABLE, variableName: variableName, variableValue: variableValue }),
        deleteFromStore: (variableName) => dispatch({ type: DELETE_VARIABLE, variableName: variableName })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAllComponent);