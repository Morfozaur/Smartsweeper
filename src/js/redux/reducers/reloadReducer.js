import {actionsTypes} from "../actions/actionsTypes";

export const reloadReducer = (state = false, {type, payload}) => {
    switch (type) {
        case actionsTypes.reload:
            return payload;
        default:
            return state;
    }
};