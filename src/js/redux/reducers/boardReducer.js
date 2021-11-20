import {actionsTypes} from "../actions/actionsTypes";

export const boardReducer = (state = [], {type, payload}) => {
    if (type === actionsTypes.board) return payload;
    return state
};