import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplaySvg from './displaySvg';
import { connect } from 'react-redux';
import { ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE } from '../../store/actionTypes';
class FinalSvgDisplay extends Component {

    render() {
        const listOfFileNames = [];
        
       	for(var key in this.props.reduxState.displayOptimaze) {
   	        listOfFileNames.push(<div className='lll'>
                <DisplaySvg dataUrl={this.props.reduxState.displayOptimaze[key].original} weight='100px' height='300' />
                <DisplaySvg dataUrl={"data:image/svg+xml;base64,"+this.props.reduxState.displayOptimaze[key].fake} weight='100px' height='300' />
            </div>);
       	}
        return (
            <div className =''>
                {listOfFileNames}
            </div>
        );
    }
}

FinalSvgDisplay.propTypes = {
    reduxState: PropTypes.object,
    addToStore: PropTypes.func,
    updateStore: PropTypes.func,
    deleteFromStore: PropTypes.func,
    listToDisplay: PropTypes.array
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

export default connect(mapStateToProps, mapDispatchToProps)(FinalSvgDisplay);

