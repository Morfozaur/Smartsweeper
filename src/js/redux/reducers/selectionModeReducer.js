import {actionsTypes} from "../actions/actionsTypes";

export const selectionModeReducer = (state = false, {type, payload}) => {
    switch (type) {
        case actionsTypes.selectMode:
            return payload;
        default:
            return state;
    }
};