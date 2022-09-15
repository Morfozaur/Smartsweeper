import {actionsTypes} from "../actions/actionsTypes";

export const powerReducer = (state = false, {type}) => {
    switch (type) {
        case actionsTypes.power:
            return !state;
        default:
            return state;
    }
};