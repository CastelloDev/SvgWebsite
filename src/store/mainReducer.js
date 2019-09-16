import { ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE } from './actionTypes';
import SvgSetting from '../components/svgSetting/svgSetting';

let initialState = {
    fileNames: [],
    svgSettingList:[],
    file:Object
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