import {actionsTypes} from "../actions/actionsTypes";

export const buttonPressReducer = (state = false, {type, payload}) => {
    switch (type) {
        case actionsTypes.buttonPress:
            return payload;
        default:
            return state;
    }
};