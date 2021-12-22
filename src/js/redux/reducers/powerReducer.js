import {actionsTypes} from "../actions/actionsTypes";

export const powerReducer = (state = false, {type, payload}) => {
    switch (type) {
        case actionsTypes.power:
            return !state;
        default:
            return state;
    }
};