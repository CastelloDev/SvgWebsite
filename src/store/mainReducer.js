import { ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE } from './actionTypes';

let initialState = {
    fileNames: []
};

export default (state=initialState, action) => {
    switch (action.type) {
    case ADD_VARIABLE:
        return {...state, [action.variableName]:action.variableValue};
    case UPDATE_VARIABLE:
        return {...state, [action.variableName]:action.variableValue};
    case DELETE_VARIABLE:
        const stateWithoutVariable = {...state};
        delete stateWithoutVariable[action.variableName];
        return {...stateWithoutVariable};
    default:
        return {...state};
    }
};