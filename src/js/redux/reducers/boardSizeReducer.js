import {actionsTypes} from "../actions/actionsTypes";

export const boardSizeReducer = (state = 10, {type, payload}) => {
    switch (type) {
        case actionsTypes.boardSize:
            return payload;
        default:
            return state;
    }
};