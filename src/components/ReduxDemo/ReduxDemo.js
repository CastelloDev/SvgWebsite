import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE } from '../../store/actionTypes';
import './ReduxDemo.scss';

class ReduxDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newVariableName:'',
            newVariableValue:''
        };
    }

    render() {
        return (
            <div>
                <div className={'redux-demo'}>
                    <input onChange={(e)=>this.setState({newVariableName: e.target.value})}/>
                    <input onChange={(e)=>this.setState({newVariableValue: e.target.value})}/>
                    <div onClick={()=>this.props.addToStore(this.state.newVariableName, this.state.newVariableValue)}>{'addVariable'}</div>
                    <div onClick={()=>this.props.deleteFromStore(this.state.newVariableName)}>{'deleteVariable'}</div>
                </div>
                <div>
                    {'Redux Object: '+ JSON.stringify(this.props.reduxState)}
                </div>
            </div>
        );
    }
}

ReduxDemo.propTypes={
    reduxState: PropTypes.object,
    addToStore: PropTypes.func,
    updateStore: PropTypes.func,
    deleteFromStore: PropTypes.func
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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
