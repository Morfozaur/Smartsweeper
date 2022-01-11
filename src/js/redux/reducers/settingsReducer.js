import {actionsTypes} from "../actions/actionsTypes";
const { backlight, sizeActive, editable } = actionsTypes;

const settings =  {
    editable: false,
    backlight: false,
    sizeActive: true
}

export const settingsReducer = (state = settings, {type, payload}) => {
    switch (type) {
        case backlight:
            return {...state, backlight: payload};
        case editable:
            return {...state, editable: payload};
        case sizeActive:
            return {...state, sizeActive: payload};
        default:
            return state;
    }
};