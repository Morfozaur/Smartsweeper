import {actionsTypes} from "../actions/actionsTypes";

export const boardReducer = (state = [], {type, payload}) => {
    switch (type) {
        case actionsTypes.board:
            return payload;
        default:
            return state;
    }
};