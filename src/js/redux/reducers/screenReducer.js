import {actionsTypes} from "../actions/actionsTypes";

export const screenReducer = (state = 'start', {type, payload}) => {
    switch (type) {
        case actionsTypes.screen:
            return payload;
        default:
            return state;
    }
};