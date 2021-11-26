import {actionsTypes} from "../actions/actionsTypes";

export const flagModeReducer = (state = false, {type, payload}) => {
    switch (type) {
        case actionsTypes.flagMode:
            return payload;
        default:
            return state;
    }
};