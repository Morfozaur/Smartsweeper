import {actionsTypes} from "../actions/actionsTypes";

export const hiddenReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case actionsTypes.setHidden:
            return payload
        case actionsTypes.removeHidden:
            return {...state}
        default:
            return state
    }
};